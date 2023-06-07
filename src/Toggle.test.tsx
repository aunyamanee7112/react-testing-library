import Toggle from "./Toggle";
import { render, screen, fireEvent } from "@testing-library/react";

describe("test accordion", () => {
  beforeEach(() => {
    render(<Toggle title="Hi">test</Toggle>)
  });

  test("should show title always page render", () => {
    expect(screen.getByText(/Hi/i)).toBeInTheDocument();
  });

  test("should not show the content at start", () => {
    expect(screen.queryByText(/test/)).not.toBeInTheDocument();
  });
  
  test("should render the button", () => {
     expect(screen.getByTestId(/visibleBtn/i)).toBeInTheDocument()
  
    });

  test("should show the content onclick", async() => {
    const button = screen.getByTestId(/visibleBtn/i)
    fireEvent.click(button);
    expect( await screen.queryByText(/test/)).toBeInTheDocument();
  });
});
