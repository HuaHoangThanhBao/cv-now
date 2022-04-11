export const getContent = (childId) => {
    switch(childId){
        case 1:
            return [
                {title: "Study Program", status: false, height: 0},
                {desc: "Institution/ Place of education", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {optional_dashed: "City, Country or GPA (optional)", status: false, height: 0},
                {content_detail: "Coures", status: false, height: 0},
                {content_bullet: "Course/Thesis/Project", status: false, height: 0},
            ]
        case 2:
            return [
                {title: "Title/Position", status: false, height: 0},
                {desc: "Workplace/Company", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {optional_dashed: "City, Country (optional)", status: false, height: 0},
                {optional_dashed2:
                  "Company Description (optional, fill when the company is not well known)", status: false, height: 0},
                {content_detail: "Achievements/Tasks", status: false, height: 0},
                {content_bullet: "Accomplishment/Responsibility/Task", status: false, height: 0},
                {contact: "Contact:", status: false, height: 0},
                {contact_person: "Contact Person", status: false, height: 0},
                {contact_info: "Contact Info", status: false, height: 0},
            ]
        case 3:
            return [
                {title: "Organization Name", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {content_detail_dashed: "Role (optional)", status: false, height: 0},
            ]
        case 4:
            return [
                {title: "Certificate Name", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {content_detail_dashed: "Description (optional)", status: false, height: 0},
            ]
        case 5:
            return [
                {title: "Project Name", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {content_detail_dashed: "Description of Achievements", status: false, height: 0},
            ]
        case 6:
            return [ 
                {title: "Certificate Name", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {content_detail_dashed: "Description (optional)", status: false, height: 0},
            ]
        case 7:
            return [ 
                {title: "Conference/Course Name", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {content_detail_dashed: "Conference/Issuer of the certificate", status: false, height: 0},
                {content_detail: "Description (optional)", status: false, height: 0},
            ]
        case 8:
            return [ 
                {title: "Title/Award Name", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {content_detail_dashed: "Name of the institution that issued/awarded it", status: false, height: 0},
                {content_detail: "Description (optional)", status: false, height: 0},
            ]
        case 9:
            return [ 
                {title: "Organization Name", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {content_detail_dashed: "Role (optional)", status: false, height: 0},
            ]
        case 10:
            return [ 
                {title: "Title/Position", status: false, height: 0},
                {desc: "Organization", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "mm", status: false, height: 0},
                {year_end: "mm", status: false, height: 0},
                {optional_dashed: "City, Country", status: false, height: 0},
                {optional_dashed2: "Organization Description (optional)", status: false, height: 0},
                {content_detail: "Task/Responsibility/Accomplishment", status: false, height: 0},
                {content_bullet: "Tasks/Achievements", status: false, height: 0},
                {contact: "Contact:", status: false, height: 0},
                {contact_person: "Contact Person", status: false, height: 0},
                {contact_info: "Contact Info", status: false, height: 0},
            ]
    }
}