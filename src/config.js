const config = {
    profile: {
        githubAccountId: "sout1024-sudo",
        profileImg: "https://avatars0.githubusercontent.com/u/15643765?s=460&v=4",
        email: "tmdgy15@gmail.com",
        description: "자바 백앤드 개발자를 꿈꾸는 주니어 개발자입니다.",
        github: "https://github.com/Songseunghyo1",
    },
    skills: [
        "JAVA", 
        "Spring Framework", 
        "Git",
    ],
    careers: [
        {
            name: "(주)iTeyes",
            duration: "2019.03 ~",
            description: "(주)iTeyes 프로세스자동화팀에서 주임으로 근무하고있습니다. 라이브러리를 활용한 데이터시각화와 자바 백엔드개발에 참여하고있습니다."
        },
        {
            name: "Jeju National Univ. System Software Lab",
            duration: "2015.11 ~ 2019.02",
            description: "시스템 소프트웨어 연구실에서 학부생 연구원으로 활동했습니다. 산학연 연계프로젝트로 반려견, 소 목장등 동물들과 관련한 연구를 진행하였습니다."
        }
    ],
    educations: [
        {
            name: "KakaoTrack ScholarShip, Jeju National University",
            duration: "2016.03 ~ 2018.11",
            description: "2016년부터 2018까지 3년간 제주대학교와 카카오가 주관하는 Kakao트랙 교육을 이수하였습니다."
        }
    ],
    presentations: [
        {
            name: "교육봉사",
            duration: "2016.06",
            description: "학과 후배들과 함께 팀을 꾸려 전공동아리 활동을 하였습니다. 매주 1회 빈 강의실에 모여 아두이노를 활용하여 기초적인 실습일 진행한 뒤 도냐에 위치한 중학교와 고등학교에 방문하여 교육봉사를 진행하였습니다.",
            contribution: "동아리의 장으로써 스터디할 주제를 선정하여  매주 한번 동아리원들과 함께 빈 강의실에 모여 아두이노와 센서를 이용해 스터디를 진행하였습니다.",
            images: ["images/meetup/edu_volunteer.jpg"],
            skills: ["Arduino", "기타 센서"],
        },
        {
            name: "2016(STEAM)융합과학창작경진대회",
            duration: "2016.08",
            description: "전공동아리원들과 함께 지능형 냉장고를 제작하여 목원대학교에서 주최한 융합과학창작경진대회에 참가하였습니다.\n장려상 수상",
            contribution: "스티로폼 박스에 전압을 조절하기 위한 릴레이를 탑재, 220v의 전압을 아두이노의 전압에 맞추어 실제 냉장고의 작동방식과 유사하게 사용자로부터 온도설정, 문열림감지[냉장고 내부 점등, 특정 시간 이상 문열림상태 지속시 경고음 출력], 문열린 시간 감지 등을 체크하고 경고음을 발생하도록 제작하였습니다.",
            images: [],
            skills: ["Arduino", "Peltier device, 릴레이, 마그네틱센서, 온습도센서"],
        }
    ],
    projects: [
        {
            name: "제주대학교 컴퓨터공학전공 코드 페스티벌",
            duration: "2018.10.27 ~ 2018.11.26",
            description: `컴퓨터공학전공 학생들을 대상으로 한 알고리즘 웹 플랫폼입니다. 학생회로 있던 때 학생들의 학업 증진을 위해 직접 개발했습니다.`,
            contribution: "로그인처리 개발을 맡았습니다.",
            skills: ["JAVA", "SpringSecurity"],
            images: ["images/codefestival/codefestival.png"],
            etc: ["https://github.com/JNU-CE-Code-Festival/Server"],
        },
        {
            name: "제대로 통한다 관리자페이지",
            duration: "2018.03 ~ 2018.06",
            description: `당시 대중교통 도착정보를 제공해주는 애플리케이션의 불편함을 느껴 '직접 개발하자!'라는 생각에 개발하게된 애플리케이션으로, 변동가능성이 높은 도착정보를 손쉽게 변경할 수 있는 관리자페이지를 개발하였습니다.  `,
            contribution: "관리자 페이지를 개발하는 역할을 맡았습니다.",
            skills: ["JAVA", "SpringSecurity", "Thymeleaf", "HTML5/CSS3"],
            images: ["images/management_page/management_page.png"],
            etc: ["https://github.com/JNU-tong/JNU-tongManagementPage"],
        },
        {
            name: "Bluetooth Router",
            duration: "2017.09 ~ 2019.02",
            description: `블루투스 통신을 이용하여 가정에서 기르는 반려동물의 활동량 증가시키고  중계기와 반려동물의 목걸이간의 통신을 통해 활동량 체크하는 시스템을 개발하는 프로젝트에 참여하였습니다.`,
            contribution: "안드로이드 애플리케이션을 개발하는 역할을 맡았습니다.",
            skills: ["JAVA", "Android", "Android BLE", "iBeacon"],
            images: ['images/beacon/beacon.png']
        },
        {
            name: "Ticket Solution",
            duration: "2017.07 ~ 2018.06",
            description: `여러 오픈마켓에 무형상품을 판매하는 사용자의 편의를 위해 하나의 솔루션을 이용해 상품의 상태 확인(재고, 판매수량 사용처리 등)`,
            contribution: "Android/IOS 화면을 개발하는 역할을 맡았습니다.",
            skills: ["ReactNative", "React Navigation"],
            images: ['images/ts/ts1.png']
        },
        {
            name: "Smart Pad",
            duration: "2017.03 ~ 2019.02",
            description: `하드웨어 장비위에 반려동물이 앉을 경우 체온, 심탄도 등을 측정하여 서버에 저장, 사용자의 요청에따라 어떠한 요청인지 파싱하여 서버에 저장된 데이터 제공`,
            contribution: "소켓 통신을 이용해 데이터를 요청했을때 정상적인 Response가 오는지 확인하기 위해 Request를 보내는 프로그램을 개발하였습니다.",
            skills: ["C", "TCP Socket"],
            images: []
        },
    ]
}

export default config;
