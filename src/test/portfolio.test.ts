import { describe, it, expect } from "vitest";
import {
  achievements,
  certifications,
  experience,
  profile,
  projects,
  techTags,
} from "@/content/portfolio";

describe("portfolio content", () => {
  it("has a valid profile email", () => {
    expect(profile.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it("has no duplicate skills in techTags", () => {
    expect(new Set(techTags).size).toBe(techTags.length);
  });

  it("gives every project a non-empty title, description and href", () => {
    for (const project of projects) {
      expect(project.title.trim()).not.toBe("");
      expect(project.description.trim()).not.toBe("");
      expect(project.href).toMatch(/^https?:\/\//);
    }
  });

  it("gives every experience entry a role and period", () => {
    for (const item of experience) {
      expect(item.role.trim()).not.toBe("");
      expect(item.period.trim()).not.toBe("");
    }
  });

  it("gives every achievement and certification a title", () => {
    for (const item of [...achievements, ...certifications]) {
      expect(item.title.trim()).not.toBe("");
    }
  });
});
