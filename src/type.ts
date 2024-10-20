import { IconProps } from "@phosphor-icons/react";

export interface Assignment {
  title: string;
  description: string;
  file?: string;
  done: boolean;
}

export interface DayScheduleProps {
  day: string;
  courses: {
    course: string;
    time: string;
    lecturer: string;
  }[];
}

export interface WeeklyScheduleTableProps {
  scheduleData: {
    day: string;
    courses: {
      course: string;
      time: string;
      lecturer: string;
    }[];
  }[];
}

export interface UserLayoutProps {
  title: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  href: string;
  text: string;
  children?: React.ReactNode;
  active?: boolean;
  icon: React.ComponentType<IconProps>;
}

export interface FeedCardProps {
  name: string;
  time: string;
  children: React.ReactNode;
}

export interface DashboardInfoProps {
  title: string;
  content: number;
  icon: React.ComponentType<IconProps>;
  className?: string;
}

export interface MadingData {
  id: number;
  title: string;
  description: string;
  image: string;
  file: string;
  author: string;
}

export interface AssignmentAdmin {
  id: number;
  course: string;
  class: string;
  description: string;
  deadline: string;
  studentsDone: number;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
}

export interface Room {
  name: string;
}

export interface Dosen {
  name: string;
}

export interface Matkul {
  name: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  time: TimeSlot[];
  room: Room[] | string;
  subject: Dosen[] | string;
  lecturer: Matkul[] | string;
}

export interface InputFieldProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface EditModalProps {
  item: ScheduleItem;
  onSave: (item: ScheduleItem) => void;
  onCancel: () => void;
}

export interface UserData {
  name: string;
  email: string;
  NIM: string;
  contact: string;
  class: string;
  imageURL?: string;
}

export interface FormData {
  email: string;
  password: string;
  name: string;
  NIM: string;
  contact: string;
  class: string;
  imageUrl?: string;
}
