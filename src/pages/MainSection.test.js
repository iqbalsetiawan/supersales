import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MainSection from "./MainSection";

describe("MainSection", () => {
  test("renders the heading", () => {
    render(<MainSection />);
    const headingElement = screen.getByText("Field sales software for humans");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the subheading", () => {
    render(<MainSection />);
    const subheadingElement = screen.getByText(
      "Supersales enables your team to perform at the highest level, yet stay human. With a sleek design and an easy-to-navigate app.",
    );
    expect(subheadingElement).toBeInTheDocument();
  });

  test("renders the demo button", () => {
    render(<MainSection />);
    const demoButton = screen.getByText("Book a demo");
    expect(demoButton).toBeInTheDocument();
  });

  test("renders the info button", () => {
    render(<MainSection />);
    const infoButton = screen.getByText("See how it works");
    expect(infoButton).toBeInTheDocument();
  });

  test("renders the main image", () => {
    render(<MainSection />);
    const mainImage = screen.getByAltText("Web Browser Prototype");
    expect(mainImage).toBeInTheDocument();
  });

  test("renders AnimatedStar components", () => {
    render(<MainSection />);
    const star1 = screen.getByAltText("Star1");
    const star2 = screen.getByAltText("Star2");
    const star3 = screen.getByAltText("Star3");
    expect(star1).toBeInTheDocument();
    expect(star2).toBeInTheDocument();
    expect(star3).toBeInTheDocument();
  });

  test("renders Person components", () => {
    render(<MainSection />);
    const person1 = screen.getByAltText("Sales");
    const person2 = screen.getByAltText("Client");
    const person3 = screen.getByAltText("Sales Manager");
    expect(person1).toBeInTheDocument();
    expect(person2).toBeInTheDocument();
    expect(person3).toBeInTheDocument();
  });
});
