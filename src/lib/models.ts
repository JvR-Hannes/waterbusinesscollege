export type ID = string;

export type Timestamp = string; // ISO 8601

export type UserRole = 'admin' | 'student';

export interface Media {
  id: ID;
  url: string;
  type: 'image' | 'video' | 'document' | 'other';
  sizeBytes: number;
  fileName: string;
  mimeType: string;
  createdAt: Timestamp;
  usedByType?: 'course' | 'lesson';
  usedById?: ID;
}

export type CourseStatus = 'draft' | 'published' | 'archived';

export interface Course {
  id: ID;
  slug: string;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  price?: number;
  isFree: boolean;
  status: CourseStatus;
  thumbnailMediaId?: ID;
  legacyPortalCourseUrl?: string;
  legacyWooProductUrl?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Module {
  id: ID;
  courseId: ID;
  title: string;
  order: number;
  description?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type LessonContentType = 'text' | 'video' | 'file' | 'link';

export interface Lesson {
  id: ID;
  moduleId: ID;
  title: string;
  order: number;
  contentType: LessonContentType;
  content: string;
  durationMinutes?: number;
  isVisible: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface User {
  id: ID;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Timestamp;
  lastLoginAt?: Timestamp;
}

export type EnrollmentStatus = 'active' | 'completed' | 'cancelled';

export type EnrollmentSource = 'manual' | 'woo' | 'other';

export interface Enrollment {
  id: ID;
  userId: ID;
  courseId: ID;
  status: EnrollmentStatus;
  source: EnrollmentSource;
  createdAt: Timestamp;
}

