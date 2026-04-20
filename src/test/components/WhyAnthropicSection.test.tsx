import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, variants, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

import WhyAnthropicSection from "@/components/WhyAnthropicSection";

describe("WhyAnthropicSection", () => {
  it("renders section heading", () => {
    render(<WhyAnthropicSection />);
    expect(screen.getByText("Why I'm Your Commercial Counsel")).toBeInTheDocument();
  });

  it("renders all four fit cards", () => {
    render(<WhyAnthropicSection />);
    expect(screen.getAllByText("What Anthropic Needs")).toHaveLength(4);
    expect(screen.getAllByText("What I Bring")).toHaveLength(4);
  });

  it("renders fit card labels", () => {
    render(<WhyAnthropicSection />);
    expect(screen.getByText("Commercial Deal Flow")).toBeInTheDocument();
    expect(screen.getByText("GTM Partnership & Velocity")).toBeInTheDocument();
    expect(screen.getByText("AI, Privacy & Policy Adjacent")).toBeInTheDocument();
    expect(screen.getByText("Generalist with Range")).toBeInTheDocument();
  });

  it("renders tags", () => {
    render(<WhyAnthropicSection />);
    expect(screen.getByText("AI Compliance")).toBeInTheDocument();
    expect(screen.getByText("Enterprise SaaS")).toBeInTheDocument();
    expect(screen.getByText("DataGrail")).toBeInTheDocument();
  });

  it("contains no em dashes", () => {
    const { container } = render(<WhyAnthropicSection />);
    expect(container.textContent).not.toContain("—");
  });
});
