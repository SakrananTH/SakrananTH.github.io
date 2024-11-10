document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("profile-container");

    // สร้างส่วนซ้าย
    const leftSection = document.createElement("div");
    leftSection.className = "left-section";

    const profilePic = document.createElement("div");
    profilePic.className = "profile-pic";
    profilePic.innerHTML = '<img src="https://www.pinterest.com/pin/1141873680491136858/" alt="รูปภาพ">';
    leftSection.appendChild(profilePic);

    const about = document.createElement("div");
    about.className = "about";
    about.innerHTML = "<p>Hello, I am an interested and experienced person in information technology. I have knowledge and understanding in solving various technical problems in both hardware and software.</p>";
    leftSection.appendChild(about);

    const skills = document.createElement("div");
    skills.className = "skills";
    skills.innerHTML = `
        <h3>ทักษะ</h3>
        <div class="skill">
            <span>figma</span>
            <div class="bar"><div class="fill figma"></div></div>
        </div>
        <div class="skill">
            <span>Java</span>
            <div class="bar"><div class="fill java"></div></div>
        </div>
        <div class="skill">
            <span>HTML</span>
            <div class="bar"><div class="fill html"></div></div>
        </div>
    `;
    leftSection.appendChild(skills);

    const contact = document.createElement("div");
    contact.className = "contact";
    contact.innerHTML = `
        <h3>ช่องทางการติดต่อ</h3>
        <p>Mobile number<br>086-350-3381</p>
        <p>Email<br>Sakranan0863@gmail.com</p>
    `;
    leftSection.appendChild(contact);

    container.appendChild(leftSection);

    // สร้างส่วนขวา
    const rightSection = document.createElement("div");
    rightSection.className = "right-section";

    const nameHeader = document.createElement("h1");
    nameHeader.textContent = "SAKRANAN KHAMMUN";
    rightSection.appendChild(nameHeader);

    const personalInfo = document.createElement("div");
    personalInfo.className = "section";
    personalInfo.innerHTML = `
        <h2>ข้อมูลส่วนตัว</h2>
        <p><strong>age</strong> 20 year old</p>
        <p><strong>ethnicity</strong> Thai</p>
        <p><strong>birthday</strong> 1 December 2003</p>
        <p><strong>address</strong> 123 Anywhere St., Any City, ST 12345</p>
    `;
    rightSection.appendChild(personalInfo);

    const education = document.createElement("div");
    education.className = "section";
    education.innerHTML = `
        <h2>ประวัติการศึกษา</h2>
        <p>2019 - 2021 | ระดับมัธยมศึกษา<br>โรงเรียนวันเหนือวิทยา สาย วิทยาศาสตร์-คณิตศาสตร์</p>
        <p>2022 - ปัจจุบัน | ระดับปริญญาตรี<br>คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์</p>
    `;
    rightSection.appendChild(education);

    const skillsSection = document.createElement("div");
    skillsSection.className = "section";
    skillsSection.innerHTML = `
        <h2>ความสามารถพิเศษ</h2>
        <ul>
            <li>ทักษะด้านคอมพิวเตอร์</li>
            <li>ทักษะด้านความคิดสร้างสรรค์</li>
            <li>ทักษะด้านความอดทน</li>
            <li>ทักษะด้านความยืดหยุ่น</li>
        </ul>
    `;
    rightSection.appendChild(skillsSection);

    container.appendChild(rightSection);
});
