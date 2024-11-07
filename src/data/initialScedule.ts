import { ScheduleItem } from "@/types/type";

export const initialSchedule: { [key: string]: ScheduleItem[] } = {
  "TI-1A": [
    {
      id: "1",
      day: "Senin",
      time: [
        {
          startTime: "07:00",
          endTime: "08:30",
        },
        {
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "GKT Lantai 8 Ruang 7",
        },
        {
          name: "GKT Lantai 8 Ruang 4",
        },
      ],
      subject: [
        {
          name: "Algoritma Pemrograman",
        },
        {
          name: "Bahasa Indonesia",
        },
      ],
      lecturer: [
        {
          name: "Pak Yudan",
        },
        {
          name: "Bu Netty",
        },
      ],
    },
    {
      id: "2",
      day: "Selasa",
      time: [
        {
          startTime: "13:30",
          endTime: "15:30",
        },
        {
          startTime: "16:00",
          endTime: "21:00",
        },
      ],
      room: [
        {
          name: "SB 2",
        },
        {
          name: "Lab Multimedia",
        },
      ],
      subject: [
        {
          name: "Arsitektur Komputer",
        },
        {
          name: "Matematika Diskrit",
        },
      ],
      lecturer: [
        {
          name: "Bu Idhawati",
        },
        {
          name: "Bu Iswanti",
        },
      ],
    },
    {
      id: "3",
      day: "Rabu",
      time: [
        {
          startTime: "07:00",
          endTime: "08:30",
        },
        {
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "MST Lantai 3 Ruang 6",
        },
        {
          name: "GKT Lantai 8 Ruang 7",
        },
      ],
      subject: [
        {
          name: "Sistem Basis Data I",
        },
        {
          name: "Etika Pemorograman",
        },
      ],
      lecturer: [
        {
          name: "Bu Sirli",
        },
        {
          name: "Pak Yudan",
        },
      ],
    },
    {
      id: "4",
      day: "Kamis",
      time: [
        {
          startTime: "12:30",
          endTime: "14:00",
        },
        {
          startTime: "14:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "MST Lantai 3 Ruang 4",
        },
        {
          name: "MST Lantai 3 Ruang 5",
        },
      ],
      subject: [
        {
          name: "Design Grafis dan Multimedia",
        },
        {
          name: "Sistem Pengantar Teknologi",
        },
      ],
      lecturer: [
        {
          name: "Bu Eri",
        },
        {
          name: "Bu Nia",
        },
      ],
    },
    {
      id: "5",
      day: "Jum'at",
      time: [
        {
          startTime: "19:00",
          endTime: "21:00",
        },
      ],
      room: [
        {
          name: "Zoom Meeting",
        },
      ],
      subject: [
        {
          name: "Sistem Operasi",
        },
      ],
      lecturer: [
        {
          name: "Pak Rico",
        },
      ],
    },
  ],
  "TI-1B": [
    {
      id: "1",
      day: "Senin",
      time: [
        {
          startTime: "07:00",
          endTime: "08:30",
        },
        {
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "GKT Lantai 8 Ruang 7",
        },
        {
          name: "GKT Lantai 8 Ruang 4",
        },
      ],
      subject: [
        {
          name: "Bahasa Indonesia",
        },
        {
          name: "Algoritma Pemrograman",
        },
      ],
      lecturer: [
        {
          name: "Bu N",
        },
        {
          name: "Pak Y",
        },
      ],
    },
    {
      id: "2",
      day: "Selasa",
      time: [
        {
          startTime: "13:30",
          endTime: "15:30",
        },
        {
          startTime: "16:00",
          endTime: "21:00",
        },
      ],
      room: [
        {
          name: "SB 2",
        },
        {
          name: "Lab Multimedia",
        },
      ],
      subject: [
        {
          name: "Matematika Diskrit",
        },
        {
          name: "Arsitektur Komputer",
        },
      ],
      lecturer: [
        {
          name: "Bu Iswanti",
        },
        {
          name: "Bu Idhawati",
        },
      ],
    },
    {
      id: "3",
      day: "Rabu",
      time: [
        {
          startTime: "07:00",
          endTime: "08:30",
        },
        {
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "MST Lantai 3 Ruang 6",
        },
        {
          name: "GKT Lantai 8 Ruang 7",
        },
      ],
      subject: [
        {
          name: "Etika Pemorograman",
        },
        {
          name: "Sistem Basis Data I",
        },
      ],
      lecturer: [
        {
          name: "Pak Yudan",
        },
        {
          name: "Bu Sirli",
        },
      ],
    },
    {
      id: "4",
      day: "Kamis",
      time: [
        {
          startTime: "12:30",
          endTime: "14:00",
        },
        {
          startTime: "14:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "MST Lantai 3 Ruang 4",
        },
        {
          name: "MST Lantai 3 Ruang 5",
        },
      ],
      subject: [
        {
          name: "Sistem Pengantar Teknologi",
        },
        {
          name: "Design Grafis dan Multimedia",
        },
      ],
      lecturer: [
        {
          name: "Bu Nia",
        },
        {
          name: "Bu Eri",
        },
      ],
    },
    {
      id: "5",
      day: "Jum'at",
      time: [
        {
          startTime: "19:00",
          endTime: "21:00",
        },
      ],
      room: [
        {
          name: "Zoom Meeting",
        },
      ],
      subject: [
        {
          name: "Sistem Operasi",
        },
      ],
      lecturer: [
        {
          name: "Pak Rico",
        },
      ],
    },
  ],
  "TI-1C": [
    {
      id: "1",
      day: "Senin",
      time: [
        {
          startTime: "07:00",
          endTime: "08:30",
        },
        {
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "GKT Lantai 8 Ruang 7",
        },
        {
          name: "GKT Lantai 8 Ruang 4",
        },
      ],
      subject: [
        {
          name: "Algoritma Pemrograman",
        },
        {
          name: "Bahasa Indonesia",
        },
      ],
      lecturer: [
        {
          name: "Pak Yudan",
        },
        {
          name: "Bu Netty",
        },
      ],
    },
    {
      id: "2",
      day: "Selasa",
      time: [
        {
          startTime: "13:30",
          endTime: "15:30",
        },
        {
          startTime: "16:00",
          endTime: "21:00",
        },
      ],
      room: [
        {
          name: "SB 2",
        },
        {
          name: "Lab Multimedia",
        },
      ],
      subject: [
        {
          name: "Arsitektur Komputer",
        },
        {
          name: "Matematika Diskrit",
        },
      ],
      lecturer: [
        {
          name: "Bu Idhawati",
        },
        {
          name: "Bu Iswanti",
        },
      ],
    },
    {
      id: "3",
      day: "Rabu",
      time: [
        {
          startTime: "07:00",
          endTime: "08:30",
        },
        {
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "MST Lantai 3 Ruang 6",
        },
        {
          name: "GKT Lantai 8 Ruang 7",
        },
      ],
      subject: [
        {
          name: "Sistem Basis Data I",
        },
        {
          name: "Etika Pemorograman",
        },
      ],
      lecturer: [
        {
          name: "Bu Sirli",
        },
        {
          name: "Pak Yudan",
        },
      ],
    },
    {
      id: "4",
      day: "Kamis",
      time: [
        {
          startTime: "12:30",
          endTime: "14:00",
        },
        {
          startTime: "14:00",
          endTime: "16:00",
        },
      ],
      room: [
        {
          name: "MST Lantai 3 Ruang 4",
        },
        {
          name: "MST Lantai 3 Ruang 5",
        },
      ],
      subject: [
        {
          name: "Design Grafis dan Multimedia",
        },
        {
          name: "Sistem Pengantar Teknologi",
        },
      ],
      lecturer: [
        {
          name: "Bu Eri",
        },
        {
          name: "Bu Nia",
        },
      ],
    },
    {
      id: "5",
      day: "Jum'at",
      time: [
        {
          startTime: "19:00",
          endTime: "21:00",
        },
      ],
      room: [
        {
          name: "Zoom Meeting",
        },
      ],
      subject: [
        {
          name: "Sistem Operasi",
        },
      ],
      lecturer: [
        {
          name: "Pak Rico",
        },
      ],
    },
  ],
};
