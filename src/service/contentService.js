export const getContent = (childId) => {
  switch (childId) {
    case 1:
      return [
        {
          title: "Study Program",
          placeHolder: "Study Program",
          status: true,
          height: 0,
        },
        {
          desc: "Institution/ Place of education",
          placeHolder: "Institution/ Place of education",
          status: false,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          optional_dashed: "City, Country or GPA (optional)",
          placeHolder: "City, Country or GPA (optional)",
          status: false,
          height: 0,
        },
        {
          content_bullet: {
            child: [
              {
                content_bullet_detail: "Course/Thesis/Project",
                placeHolder: "Course/Thesis/Project",
                status: false,
                height: 0,
              },
            ],
          },
          status: false,
          height: 0,
          placeHolder: "",
        },
      ];
    case 2:
      return [
        {
          title: "Title/Position",
          placeHolder: "Title/Position",
          status: true,
          height: 0,
        },
        {
          desc: "Workplace/Company",
          placeHolder: "Workplace/Company",
          status: false,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          optional_dashed: "City, Country (optional)",
          placeHolder: "City, Country (optional)",
          status: false,
          height: 0,
        },
        {
          optional_dashed2:
            "Company Description (optional, fill when the company is not well known)",
          placeHolder:
            "Company Description (optional, fill when the company is not well known)",
          status: false,
          height: 0,
        },
        {
          content_bullet: {
            child: [
              {
                content_bullet_detail: "Accomplishment/Responsibility/Task",
                placeHolder: "Accomplishment/Responsibility/Task",
                status: false,
                height: 0,
              },
            ],
          },
          status: false,
          height: 0,
          placeHolder: "",
        },
        {
          contact: "Contact:",
          placeHolder: "Contact:",
          status: false,
          height: 0,
        },
        {
          contact_person: "Contact Person",
          placeHolder: "Contact Person",
          status: false,
          height: 0,
        },
        {
          contact_info: "Contact Info",
          placeHolder: "Contact Info",
          status: false,
          height: 0,
        },
      ];
    case 3:
      return [
        {
          title: "Organization Name",
          placeHolder: "Organization Name",
          status: true,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          content_detail_dashed: "Role (optional)",
          placeHolder: "Role (optional)",
          status: false,
          height: 0,
        },
      ];
    case 4:
      return [
        {
          title: "Certificate Name",
          placeHolder: "Certificate Name",
          status: true,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          content_detail_dashed: "Description (optional)",
          placeHolder: "Description (optional)",
          status: false,
          height: 0,
        },
      ];
    case 5:
      return [
        {
          title: "Project Name",
          placeHolder: "Project Name",
          status: true,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          content_bullet: {
            child: [
              {
                content_bullet_detail: "Description of Achievements",
                placeHolder: "Description of Achievements",
                status: false,
                height: 0,
              },
            ],
          },
          status: false,
          height: 0,
          placeHolder: "",
        },
      ];
    case 6:
      return [
        {
          title: "Achievement Name",
          placeHolder: "Achievement Name",
          status: true,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          content_detail_dashed: "Description (optional)",
          placeHolder: "Description (optional)",
          status: false,
          height: 0,
        },
      ];
    case 7:
      return [
        {
          title: "Conference/Course Name",
          placeHolder: "Conference/Course Name",
          status: true,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          content_detail_dashed: "Conference/Issuer of the certificate",
          placeHolder: "Conference/Issuer of the certificate",
          status: false,
          height: 0,
        },
        {
          content_bullet: {
            child: [
              {
                content_bullet_detail: "Description (optional)",
                placeHolder: "Description (optional)",
                status: false,
                height: 0,
              },
            ],
          },
          status: false,
          height: 0,
          placeHolder: "",
        },
      ];
    case 8:
      return [
        {
          title: "Title/Award Name",
          placeHolder: "Title/Award Name",
          status: true,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          content_detail_dashed:
            "Name of the institution that issued/awarded it",
          placeHolder: "Name of the institution that issued/awarded it",
          status: false,
          height: 0,
        },
        {
          content_bullet: {
            child: [
              {
                content_bullet_detail: "Description (optional)",
                placeHolder: "Description (optional)",
                status: false,
                height: 0,
              },
            ],
          },
          status: false,
          height: 0,
          placeHolder: "",
        },
      ];
    case 9:
      return [
        {
          title: "Name of the class",
          placeHolder: "Name of the class",
          status: true,
          height: 0,
        },
        {
          desc: "Institution/Place of Education",
          placeHolder: "Institution/Place of Education",
          status: false,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          optional_dashed: "City, Country",
          placeHolder: "City, Country",
          status: false,
          height: 0,
        },
        {
          content_bullet: {
            child: [
              {
                content_bullet_detail: "Task/Responsibility/Accomplishment",
                placeHolder: "Task/Responsibility/Accomplishment",
                status: false,
                height: 0,
              },
            ],
          },
          status: false,
          height: 0,
          placeHolder: "",
        },
        {
          contact: "Contact:",
          placeHolder: "Contact:",
          status: false,
          height: 0,
        },
        {
          contact_person: "Contact Person",
          placeHolder: "Contact Person",
          status: false,
          height: 0,
        },
        {
          contact_info: "Contact Info",
          placeHolder: "Contact Info",
          status: false,
          height: 0,
        },
      ];
    case 10:
      return [
        {
          title: "Title/Position",
          placeHolder: "Title/Position",
          status: true,
          height: 0,
        },
        {
          desc: "Organization",
          placeHolder: "Organization",
          status: false,
          height: 0,
        },
        {
          month_start: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          month_end: "mm",
          placeHolder: "mm",
          status: false,
          height: 0,
        },
        {
          year_start: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          year_end: "yyyy",
          placeHolder: "yyyy",
          status: false,
          height: 0,
        },
        {
          optional_dashed: "City, Country",
          placeHolder: "City, Country",
          status: false,
          height: 0,
        },
        {
          optional_dashed2: "Organization Description (optional)",
          placeHolder: "Organization Description (optional)",
          status: false,
          height: 0,
        },
        {
          content_detail: "Task/Responsibility/Accomplishment",
          placeHolder: "Task/Responsibility/Accomplishment",
          status: false,
          height: 0,
        },
        {
          content_bullet: {
            child: [
              {
                content_bullet_detail: "Tasks/Achievements",
                placeHolder: "Tasks/Achievements",
                status: false,
                height: 0,
              },
            ],
          },
          status: false,
          height: 0,
          placeHolder: "",
        },
        {
          contact: "Contact:",
          placeHolder: "Contact:",
          status: false,
          height: 0,
        },
        {
          contact_person: "Contact Person",
          placeHolder: "Contact Person",
          status: false,
          height: 0,
        },
        {
          contact_info: "Contact Info",
          placeHolder: "Contact Info",
          status: false,
          height: 0,
        },
      ];
    case 11:
      return [
        {
          content_detail: "Cause",
          placeHolder: "Cause",
          status: true,
          height: 0,
        },
      ];
    case 12:
      return [
        {
          title: "Language Name",
          placeHolder: "Language Name",
          status: true,
          height: 0,
        },
        {
          content_detail_dashed: "Description",
          placeHolder: "Description",
          status: false,
          height: 0,
        },
      ];
    case 13:
      return [
        {
          title: "Publication Title",
          placeHolder: "Publication Title",
          status: true,
          height: 0,
        },
        {
          desc: "Publication Type",
          placeHolder: "Publication Type",
          status: false,
          height: 0,
        },
        {
          optional_dashed: "Author(s)",
          placeHolder: "Author(s)",
          status: false,
          height: 0,
        },
        {
          optional_dashed2: "List of Authors",
          placeHolder: "List of Authors",
          status: false,
          height: 0,
        },
        {
          content_detail: "Date of Publication",
          placeHolder: "Date of Publication",
          status: false,
          height: 0,
        },
        {
          optional_dashed3: "Publisher/Issue/Pages, etc.",
          placeHolder: "Publisher/Issue/Pages, etc.",
          status: false,
          height: 0,
        },
        {
          optional_dashed4: "Description",
          placeHolder: "Description",
          status: false,
          height: 0,
        },
      ];
    case 14:
      return [
        {
          content_detail: "Skill name",
          placeHolder: "Skill name",
          status: true,
          height: 0,
        },
      ];
    case 15:
      return [
        {
          content_detail: "Interest",
          placeHolder: "Interest",
          status: true,
          height: 0,
        },
      ];
    case 16:
      return [
        {
          content_detail: "Soft skill",
          placeHolder: "Soft skill",
          status: true,
          height: 0,
        },
      ];
    case 17:
      return [
        {
          title: "Name and Position",
          placeHolder: "Name and Position",
          status: true,
          height: 0,
        },
        {
          optional_dashed: "“Reference”",
          placeHolder: "“Reference”",
          status: false,
          height: 0,
        },
        {
          contact: "Contact:",
          placeHolder: "Contact:",
          status: false,
          height: 0,
        },
        {
          contact_person: "Contact Person",
          placeHolder: "Contact Person",
          status: false,
          height: 0,
        },
        {
          contact_info: "Contact Info",
          placeHolder: "Contact Info",
          status: false,
          height: 0,
        },
      ];
    default:
      return [];
  }
};
