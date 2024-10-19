import { IconProps } from "@phosphor-icons/react";

interface Assignment {
  title: string;
  description: string;
  file?: string;
  done: boolean;
}

interface DayScheduleProps {
  day: string;
  courses: {
    course: string;
    time: string;
    lecturer: string;
  }[];
}

interface WeeklyScheduleTableProps {
  scheduleData: {
    day: string;
    courses: {
      course: string;
      time: string;
      lecturer: string;
    }[];
  }[];
}

interface UserLayoutProps {
  title: string;
  children: React.ReactNode;
}

interface ButtonProps {
  href: string;
  text: string;
  children?: React.ReactNode;
  active?: boolean;
  icon: React.ComponentType<IconProps>;
}

interface FeedCardProps {
  name: string;
  time: string;
  children: React.ReactNode;
}

interface DashboardInfoProps {
  title: string;
  content: number;
  icon: React.ComponentType<IconProps>;
  className?: string;
}

interface MadingData {
  id: number;
  title: string;
  description: string;
  image: string;
  file: string;
  author: string;
}

interface AssignmentAdmin {
  id: number;
  course: string;
  class: string;
  description: string;
  deadline: string;
  studentsDone: number;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
}

interface Room {
  name: string;
}

interface Dosen {
  name: string;
}

interface Matkul {
  name: string;
}

interface ScheduleItem {
  id: string;
  day: string;
  time: TimeSlot[];
  room: Room[] | string;
  subject: Dosen[] | string;
  lecturer: Matkul[] | string;
}

interface InputFieldProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface EditModalProps {
  item: ScheduleItem;
  onSave: (item: ScheduleItem) => void;
  onCancel: () => void;
}

export type {
  Assignment,
  DayScheduleProps,
  WeeklyScheduleTableProps,
  UserLayoutProps,
  ButtonProps,
  FeedCardProps,
  DashboardInfoProps,
  MadingData,
  AssignmentAdmin,
  ScheduleItem,
  TimeSlot,
  Room,
  Dosen,
  Matkul,
  InputFieldProps,
  EditModalProps,
};
