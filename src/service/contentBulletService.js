export const getContentBulletDetail = (childId) => {
  switch (childId) {
    case 1:
      return {
        content_bullet_detail: "Course/Thesis/Project",
        placeHolder: "Course/Thesis/Project",
        status: false,
        height: 0,
      };
    case 2:
      return {
        content_bullet_detail: "Accomplishment/Responsibility/Task",
        placeHolder: "Accomplishment/Responsibility/Task",
        status: false,
        height: 0,
      };
    case 5:
      return {
        content_bullet_detail: "Description of Achievements",
        placeHolder: "Description of Achievements",
        status: false,
        height: 0,
      };
    case 7:
      return {
        content_bullet_detail: "Description (optional)",
        placeHolder: "Description (optional)",
        status: false,
        height: 0,
      };
    case 8:
      return {
        content_bullet_detail: "Description (optional)",
        placeHolder: "Description (optional)",
        status: false,
        height: 0,
      };
    case 9:
      return {
        content_bullet_detail: "Task/Responsibility/Accomplishment",
        placeHolder: "Task/Responsibility/Accomplishment",
        status: false,
        height: 0,
      };
    case 10:
      return {
        content_bullet_detail: "Tasks/Achievements",
        placeHolder: "Tasks/Achievements",
        status: false,
        height: 0,
      };
  }
};
