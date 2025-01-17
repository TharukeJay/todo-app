import request from 'supertest';
import app from '../index.js';
import db from '../api/utils/db.js';


// Before running tests, create the test database
beforeAll(async () => {
    await db.query("DELETE FROM tasks");
});

// Close DB connection after tests
afterAll(async () => {
    await db.end();
});

// Test 1: Create a new task
test("POST /api/task/task-create - Should create a new task", async () => {
    const res = await request(app).post("/api/task/task-create").send({
        title: "Test Task",
        description: "This is a test task",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Test Task");
});

// Test 2: Retrieve tasks (Only incomplete ones)
test("GET /api/task/task-get - Should fetch only incomplete tasks", async () => {
    const res = await request(app).get("/api/task/task-get");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
});

// Test 3: Mark a task as completed
test("POST /api/task/task-update/:id/ - Should mark a task as completed", async () => {
    const newTask = await request(app).post("/api/task/task-update/1").send({
        title: "Complete Task",
        description: "This task will be marked as done",
    });

    const res = await request(app).post(`/api/task/task-update/${newTask.body.id}`);
    expect(res.statusCode).toBe(200);

    // Verify task is now marked as completed
    const allTasks = await request(app).get("/api/task/task-get");
    expect(allTasks.body.some((task) => task.id === newTask.body.id)).toBe(false);
});
