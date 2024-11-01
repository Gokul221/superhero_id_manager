import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Index from "../pages";

const mockHeroes = [
  { _id: "1", superHero: "Batman" },
  { _id: "2", superHero: "Superman" },
  { _id: "3", superHero: "Spiderman" },
];

describe("Homepage", () => {
  test("should render superhero cards", () => {
    render(<Index heros={mockHeroes} />);
    // Check if hero names are displayed
    expect(screen.getByText("Batman")).toBeInTheDocument();
    expect(screen.getByText("Superman")).toBeInTheDocument();
    expect(screen.getByText("Spiderman")).toBeInTheDocument();

    // Check if the correct number of hero cards is rendered (based on mock data)
    const buttons = screen.getAllByRole("button", { name: /view hero/i });
    expect(buttons).toHaveLength(mockHeroes.length);
  });

  test("should render heading", () => {
    render(<Index heros={mockHeroes} />);
    // Check if the hardcoded heading is rendered correctly
    expect(screen.getByText("Superhero Identity manager")).toBeInTheDocument();
  });
});
