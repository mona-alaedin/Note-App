import { fireEvent, render, screen } from "../../test-utils";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";

function addNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/note title/i);
  const inputDescription = screen.getByPlaceholderText(/note description/i);
  const button = screen.getByRole("button", { name: /Add New Note/i });

  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, {
      target: { value: note.description },
    });

    fireEvent.click(button);
  });
}

test("Note App #1 : should inpute be empty after submit.", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "Note one",
      description: "Note one description",
    },
  ]);
  const inputTitle = screen.getByPlaceholderText(/note title/i);
  expect(inputTitle.value).toBe("");
});

test("Note App #2 : should add multiple items.", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "Note one",
      description: "Note one description",
    },
    {
      title: "Note one",
      description: "Note two description",
    },
    {
      title: "Note one",
      description: "Note three description",
    },
  ]);
  const divElements = screen.getAllByText(/Note one/i);
  expect(divElements.length).toBe(4);
});

test("Note App #3 : should not have active class when initially rendered.", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "Note one",
      description: "Note one description",
    },
  ]);
  const divElements = screen.getByTestId("note-item");
  expect(divElements).not.toHaveClass("completed");
});

test("Note App #4 : should not have active class when item clicked.", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "Note one",
      description: "Note one description",
    },
  ]);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  const divElements = screen.getByTestId("note-item");
  expect(divElements).toHaveClass("completed");
});
