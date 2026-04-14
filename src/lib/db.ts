import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";
import {
  Course,
  Enrollment,
  Lesson,
  Media,
  Module,
  Timestamp,
  User,
} from "./models";

type DatabaseShape = {
  courses: Course[];
  modules: Module[];
  lessons: Lesson[];
  users: User[];
  enrollments: Enrollment[];
  media: Media[];
};

const DB_FILE_PATH = path.resolve(process.cwd(), "admin-data.json");

function now(): Timestamp {
  return new Date().toISOString();
}

function loadDb(): DatabaseShape {
  if (!fs.existsSync(DB_FILE_PATH)) {
    const empty: DatabaseShape = {
      courses: [],
      modules: [],
      lessons: [],
      users: [],
      enrollments: [],
      media: [],
    };
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(empty, null, 2));
    return empty;
  }

  try {
    const raw = fs.readFileSync(DB_FILE_PATH, "utf-8");
    return JSON.parse(raw) as DatabaseShape;
  } catch {
    const empty: DatabaseShape = {
      courses: [],
      modules: [],
      lessons: [],
      users: [],
      enrollments: [],
      media: [],
    };
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(empty, null, 2));
    return empty;
  }
}

function saveDb(db: DatabaseShape) {
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));
}

export const db = {
  listCourses(): Course[] {
    const data = loadDb();
    return data.courses;
  },

  getCourse(id: string): Course | undefined {
    const data = loadDb();
    return data.courses.find((c) => c.id === id);
  },

  createCourse(input: Omit<Course, "id" | "createdAt" | "updatedAt">): Course {
    const data = loadDb();
    const course: Course = {
      ...input,
      id: uuid(),
      createdAt: now(),
      updatedAt: now(),
    };
    data.courses.push(course);
    saveDb(data);
    return course;
  },

  updateCourse(
    id: string,
    updates: Partial<Omit<Course, "id" | "createdAt">>
  ): Course | undefined {
    const data = loadDb();
    const index = data.courses.findIndex((c) => c.id === id);
    if (index === -1) return undefined;
    const existing = data.courses[index];
    const updated: Course = {
      ...existing,
      ...updates,
      updatedAt: now(),
    };
    data.courses[index] = updated;
    saveDb(data);
    return updated;
  },

  deleteCourse(id: string): boolean {
    const data = loadDb();
    const before = data.courses.length;
    data.courses = data.courses.filter((c) => c.id !== id);
    const courseModules = data.modules.filter((m) => m.courseId === id);
    const moduleIds = courseModules.map((m) => m.id);
    data.modules = data.modules.filter((m) => m.courseId !== id);
    data.lessons = data.lessons.filter(
      (l) => !moduleIds.includes(l.moduleId)
    );
    saveDb(data);
    return data.courses.length < before;
  },

  listModulesForCourse(courseId: string): Module[] {
    const data = loadDb();
    return data.modules
      .filter((m) => m.courseId === courseId)
      .sort((a, b) => a.order - b.order);
  },

  listLessonsForModule(moduleId: string): Lesson[] {
    const data = loadDb();
    return data.lessons
      .filter((l) => l.moduleId === moduleId)
      .sort((a, b) => a.order - b.order);
  },

  listMedia(): Media[] {
    const data = loadDb();
    return data.media;
  },

  addMedia(input: Omit<Media, "id" | "createdAt">): Media {
    const data = loadDb();
    const media: Media = {
      ...input,
      id: uuid(),
      createdAt: now(),
    };
    data.media.push(media);
    saveDb(data);
    return media;
  },

  deleteMedia(id: string): boolean {
    const data = loadDb();
    const before = data.media.length;
    data.media = data.media.filter((m) => m.id !== id);
    saveDb(data);
    return data.media.length < before;
  },

  listUsers(): User[] {
    const data = loadDb();
    return data.users;
  },

  addUser(input: Omit<User, "id" | "createdAt">): User {
    const data = loadDb();
    const user: User = {
      ...input,
      id: uuid(),
      createdAt: now(),
    };
    data.users.push(user);
    saveDb(data);
    return user;
  },

  listEnrollments(): Enrollment[] {
    const data = loadDb();
    return data.enrollments;
  },

  addEnrollment(
    input: Omit<Enrollment, "id" | "createdAt">
  ): Enrollment {
    const data = loadDb();
    const enrollment: Enrollment = {
      ...input,
      id: uuid(),
      createdAt: now(),
    };
    data.enrollments.push(enrollment);
    saveDb(data);
    return enrollment;
  },

  deleteEnrollment(id: string): boolean {
    const data = loadDb();
    const before = data.enrollments.length;
    data.enrollments = data.enrollments.filter((e) => e.id !== id);
    saveDb(data);
    return data.enrollments.length < before;
  },
};

