export const getContent = (childId) => {
    switch(childId){
        case 1:
            return [
                {title: "Study Program", status: false},
                {desc: "Institution/ Place of education", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {optional_dashed: "City, Country or GPA (optional)", status: false},
                {content_detail: "Coures", status: false},
                {content_bullet: "Course/Thesis/Project", status: false},
            ]
        case 2:
            return [
                {title: "Title/Position", status: false},
                {desc: "Workplace/Company", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {optional_dashed: "City, Country (optional)", status: false},
                {optional_dashed2:
                  "Company Description (optional, fill when the company is not well known)", status: false},
                {content_detail: "Achievements/Tasks", status: false},
                {content_bullet: "Accomplishment/Responsibility/Task", status: false},
                {contact: "Contact:", status: false},
                {contact_person: "Contact Person", status: false},
                {contact_info: "Contact Info", status: false},
            ]
        case 3:
            return [
                {title: "Organization Name", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {content_detail_dashed: "Role (optional)", status: false},
            ]
        case 4:
            return [
                {title: "Certificate Name", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {content_detail_dashed: "Description (optional)", status: false},
            ]
        case 5:
            return [
                {title: "Project Name", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {content_detail_dashed: "Description of Achievements", status: false},
            ]
        case 6:
            return [ 
                {title: "Certificate Name", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {content_detail_dashed: "Description (optional)", status: false},
            ]
        case 7:
            return [ 
                {title: "Conference/Course Name", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {content_detail_dashed: "Conference/Issuer of the certificate", status: false},
                {content_detail: "Description (optional)", status: false},
            ]
        case 8:
            return [ 
                {title: "Title/Award Name", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {content_detail_dashed: "Name of the institution that issued/awarded it", status: false},
                {content_detail: "Description (optional)", status: false},
            ]
        case 9:
            return [ 
                {title: "Organization Name", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {content_detail_dashed: "Role (optional)", status: false},
            ]
        case 10:
            return [ 
                {title: "Title/Position", status: false},
                {desc: "Organization", status: false},
                {month_start: "mm", status: false},
                {month_end: "mm", status: false},
                {year_start: "mm", status: false},
                {year_end: "mm", status: false},
                {optional_dashed: "City, Country", status: false},
                {optional_dashed2: "Organization Description (optional)", status: false},
                {content_detail: "Task/Responsibility/Accomplishment", status: false},
                {content_bullet: "Tasks/Achievements", status: false},
                {contact: "Contact:", status: false},
                {contact_person: "Contact Person", status: false},
                {contact_info: "Contact Info", status: false},
            ]
    }
}