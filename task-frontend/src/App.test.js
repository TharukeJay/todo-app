import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import App from "../src/App";

const mock = new MockAdapter(axios);
const API_URL = "http://localhost:3001/api/task";

// Test 1: Renders the task input fields
test("renders task input fields and button", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeInTheDocument();
});

// Test 2: Fetch and display tasks
test("fetches and displays tasks", async () => {
  mock.onGet(API_URL+'/task-get').reply(200, [
    { id: 1, title: "Mock Task", description: "Test description", completed: false },
  ]);

  render(<App />);
  expect(await screen.findByText("Mock Task")).toBeInTheDocument();
});

// Test 3: Add a new task
test("adds a new task", async () => {
  mock.onPost(API_URL+'/task-create').reply(200, { id: 2, title: "New Task", description: "New description" });

  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Title"), { target: { value: "New Task" } });
  fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "New description" } });
  fireEvent.click(screen.getByText("Add"));

  expect(await screen.findByText("New Task")).toBeInTheDocument();
});

// Test 4: Mark a task as done
test("marks a task as completed", async () => {
  mock.onPut(`${API_URL}/task-update/1`).reply(200);

  render(<App />);
  const doneButton = await screen.findByText("Done");
  fireEvent.click(doneButton);

  expect(doneButton).not.toBeInTheDocument();
});
