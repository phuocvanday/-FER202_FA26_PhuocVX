export const courses = [
  {
    code: 'PRF192',
    name: 'Programming Fundamentals',
    credits: 3,
    semester: 1,
    desc: 'Nhập môn lập trình với ngôn ngữ C: biến, rẽ nhánh, vòng lặp, hàm, mảng và chuỗi.',
  },
  {
    code: 'WED201c',
    name: 'Web Design',
    credits: 3,
    semester: 2,
    desc: 'Thiết kế giao diện web với HTML, CSS và các nguyên tắc trải nghiệm người dùng.',
  },
  {
    code: 'PRO192',
    name: 'Object-Oriented Programming',
    credits: 3,
    semester: 2,
    desc: 'Lập trình hướng đối tượng với Java: lớp, kế thừa, đa hình, interface và collection.',
  },
  {
    code: 'FER202',
    name: 'Front-End Web Development with React',
    credits: 3,
    semester: 4,
    desc: 'Xây dựng giao diện web bằng React: component, props, hooks, React Router và React-Bootstrap.',
  },
  {
    code: 'SWP391',
    name: 'Software Development Project',
    credits: 3,
    semester: 5,
    desc: 'Làm dự án phần mềm theo nhóm: phân tích yêu cầu, thiết kế, lập trình và kiểm thử.',
  },
];

export const findCourse = (code) =>
  courses.find((c) => c.code.toLowerCase() === code?.toLowerCase());
