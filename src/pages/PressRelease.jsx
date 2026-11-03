import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Newspaper,
} from "lucide-react";

// IMAGE IMPORT
const pressReleaseImages = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/images/press-release/*.{webp,png,jpg,jpeg}", {
      eager: true,
      import: "default",
    }),
  ).map(([path, src]) => [path.split("/").pop(), src]),
);

const getPressReleaseImage = (fileName) => pressReleaseImages[fileName] || "";

// PRESS RELEASE DATA
const pressReleases = [
  {
    id: 36,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "Together with ACT (Aksi Cepat Tanggap), Suara.com will continue to make efforts to distribute food alms to people in need. This was stated by the Editor in Chief of Suara.com Suwarjono during the distribution of food packages for the iftar at Khusnul Khotimah Mosque, Bumi Dirgantara Permai, Jatisari, Jatiasih District, Bekasi City, Sunday, May 2, 2021.'So this is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan, for example those who lack food at dawn or at iftar,' said Suwarjono in Bekasi.",
      "In the event, ACT Senior Manager Lidya Khaerani Hestya also thanked Suara.com and to the readers of this media who have trusted ACT as a channel of kindness to the people of Indonesia.'God willing, all the help from Suara.com readers can provide the best benefits for our brothers and sisters affected by the Covid-19 pandemic,' said Lidya. Meanwhile, the Chairperson of the Khusnul Khotimah Mosque DKM Muhammad Solihun Nur also thanked the readers of Suara.com and ACT, for distributing iftar packages at the mosque for worshipers and local residents.",
      "Entering the fasting month of Ramadan 1442 H, Suara.com has tried to help raise donations in the form of alms, especially from its readers, to be distributed in the form of food to people in need. This program collaborates with ACT as a fundraising platform through the IndonesiaDermawan.id website, which will also help distribute it. As for the distribution itself, apart from ready-to-eat food packages, both for breaking the fast and for sahur, it can also be in the form of foodstuffs such as rice and so on. The activity held at the mosque in Bekasi is one of them.",
    ],
  },

  {
    id: 35,
    category: "ANNIVERSARY",
    date: "March 20, 2021",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-35.webp"),
    title:
      "Suara.com's 7th Anniversary is Decorated with Interesting Events, Including the Launch of BeritaHits.id",
    excerpt:
      "A series of live virtual tour programs, YourSay writer's workshop, as well as the grand final of Bintang Suara have also been decorating Suara.com's 7th anniversary in the last few days.",
    content: [
      "In commemoration of the 7th anniversary which fell on March 11, 2021, Suara.com in the last few days held a number of important and interesting activities. One of them was on Friday, March 19, when a webinar with the theme 'Adaptation and Technology, Tips for Local MSMEs to Continue to Develop in the Midst of the Pandemic' was broadcasted live.",
      "Minister of Cooperatives and SMEs Teten Masduki appeared as the keynote speaker in this webinar. Other speakers in this webinar include a businessman and businesswoman, namely Perry Tristianto (Bandung) who is known for managing the fashion, culinary and tourism businesses of the Farm House group, and Licke Mayasari (Surabaya) with the wedding gifts business Peapepo which she also supervised. Also speaking was the well-known marketing consultant Yuswohady, and Eri Palgunadi as JNE's VP of Marketing.",
      "In addition to the webinar which also marked the launching of the Suara UMKM program, Suara.com on the same day also officially launched the BeritaHits.id page which has recently begun to decorate the news timeline, especially regarding topics that are viral and become netizen's conversations. Then there was also a launching of points & rewards system for membership through the Arkadia.me gateway which is used by YourSay writers, as well as a fresh new look design for the Suara.com website.",
      "The series of Suara.com Anniversary events had also been enlivened the day before, through a series of live virtual tour programs 'Let's Go Cabs' from tourist locations in three cities, namely Yogyakarta, Makassar and Bandung. Another event was the YourSay writing workshop which is also broadcasted live on the website and Suaradotcom Youtube channel.",
      "Still related to the anniversary, on March 9, the Bintang Suara grand final event was held, taking place at the Swiss-Belhotel swimming pool area, Pondok Indah, Jakarta. With strict health protocols where only crew and special invitations were present, three contestants appeared at this main event, namely Aurel Ratamchia Dewanda, Sri Ayu Kurnia, and Imelda Mega Rosita. As a result, Aurel was chosen as the winner as well as a new talented singer who is considered ready to have a career in the Indonesian music industry.",
      "Meanwhile, during an internal thanksgiving session for the 7th Anniversary celebration at Suara.com office on Friday, March 19, the Board of Directors expressed happiness for the increasing age of this online media while continuing to gain achievements. Especially in the past year, which although was considered a hard time due to the pandemic situation, all employees can still be very productive, both in terms of content publication, launching and implementing various programs, to reaching achievements.",
      "'It's been a tough year, and maybe it will still be tough considering the condition of the economy and the business world that is still trying to get up, but so far we can get through it with maximum effort. Of course, by entering the age of 7, we will strengthen our determination to continue to strive for the best results,' said CEO of PT Arkadia Digital Media Tbk, Wiliam Martaputra.",
      "The Editor in Chief of Suara.com who is also Director of PT Arkadia Digital Media Tbk, Suwarjono, expressed the same thing. Suwarjono emphasized that through hard work and various innovation steps, one of which is through a network of collaborations with dozens of media in various regions in Indonesia, this online media will be able to survive and even take its own position as an independent media with a good reputation.",
    ],
  },

  {
    id: 34,
    category: "AWARDS",
    date: "February 17, 2021",
    author: "News Desk",
    image: getPressReleaseImage("press-release-34.webp"),
    title: "Two Recognitions in a Day for Suara.com",
    excerpt:
      "A plaque of appreciation entitled Humanitarian Award is given by ACT in Jakarta, while the Surakarta City KPU appreciated Suara.com's active involvement in publishing news regarding the 2020 Regional Elections.",
    content: [
      "In the midst of a pandemic situation that is still worrying, Tuesday, February 16th, is a day to be proud of and to be grateful for by Suara.com, Arkadia Digital Media's main portal. Yes, because on that rare day Suara.com received two recognitions from two different institutions in two different places.",
      "One of the awards came from the humanitarian agency ACT (Aksi Cepat Tanggap). For the participation of Suara.com, which is considered to have taken part in helping disaster victims, ACT gave a plaque of appreciation entitled Humanitarian Award.",
      "This award was handed over directly by the General Manager of ACT, Ade M Yusuf, who that day visited the Suara.com office in Jakarta with his team. Received by the Editor in Chief of Suara.com Suwarjono who is also Director of PT Arkadia Digital Media Tbk, the award is referred to as an appreciation for Suara.com's support and assistance in taking action together to provide real solutions helping brothers and sisters affected by disasters in the country.",
      "'As an institution with many social programs and real actions in the community, including when a disaster occurs, we are well aware of the role of the media in disseminating various information to a wide audience,' said Ade in a discussion at the Suara.com office.",
      "Suwarjono, on the other hand, underlined that this has indeed become the basic task and function of the mass media, other than that the readers themselves definitely need and will seek the information needed during these times of disaster.",
      "'Since its first publication, Suara.com has always tried to cover various events from various sides, run information, and bring up typical articles about the condition of the community and the stages of recovery, including directly from the field. Because this is indeed our duty,' said Suwarjono.",
      "The big earthquake that hit the West Sulawesi (Sulbar) area, which in particular had a major impact in the Majene and Mamuju areas at the end of January 2021, became one of the moments where ACT and Suara.com were both involved in the field. Together with a number of other media, a journalist from Suara.com at that time joined the ACT group which sent aid to affected areas.",
      "Suara.com journalist Bagaskara Isdiansyah himself was also given a similar award plaque by ACT, for his direct involvement in the humanitarian mission after the West Sulawesi earthquake. It is known that ACT at that time brought no less than 1,000 tons of aid, while also carrying out various other social actions in disaster areas.",
      "Meanwhile in Solo, on the same afternoon, Suara.com also received another award, which on that occasion was represented by the editor of the SuaraSurakarta.id regional page, Ronald Seger Prabowo. Presented by one of the commissioners of the Surakarta City KPU, Bambang Christanto, the award given was as a Media for Socializing the 2020 Regional Elections.",
      "Together with several other media, Suara.com is considered to have consistently provided education to the people of Solo regarding the 2020 Regional Elections. For this reason, according to the Chair of the Surakarta City KPU, Nurul Sutarti, his institution feels it is appropriate to appreciate and express gratitude.",
      "'Media colleagues always participate in reporting on the stages of the 2020 Regional Elections, and other matters related to the KPU. We thank you,' said Nurul Sutarti, who on that occasion also gave awards to several local Voting Organizing Groups (KPPS).",
    ],
  },

  {
    id: 33,
    category: "NEW PROGRAM",
    date: "December 21, 2020",
    author: "Editorial Team",
    image: getPressReleaseImage("press-release-33.webp"),
    title:
      "Closing the Pandemic Year 2020: Several More Programs and Activities",
    excerpt:
      "Arkadia is closing 2020 with several more programs on hands, including opening a talent scout program called 'Bintang Suara' and publishing six more Suara Regional pages.",
    content: [
      "Jakarta - As 2020 draws to a close, Arkadia Digital Media continues to expand its portfolio with several new programs and initiatives, demonstrating resilience and innovation during challenging times. Among the key developments is the launch of 'Bintang Suara,' a comprehensive talent scout program designed to identify and nurture emerging talents in digital media, journalism, and content creation. This program aims to build a pipeline of skilled professionals ready to meet the evolving demands of the digital media landscape.",
      "Simultaneously, the company has expanded its regional presence by publishing six additional Suara Regional pages, bringing localized news and content to communities across Indonesia. This expansion reflects Arkadia's commitment to serving diverse audiences with relevant, location-specific information.",
      "These initiatives represent Arkadia's strategic approach to growth and community engagement, even in the face of pandemic-related challenges. The company's ability to innovate and expand during difficult times positions it well for future opportunities.",
    ],
  },

  {
    id: 32,
    category: "HOAX-BUSTING",
    date: "November 30, 2020",
    author: "Editorial Team",
    image: getPressReleaseImage("press-release-32.webp"),
    title:
      "Arkadia Team Actively Involved in Fact-Checking Effort Related to Regional Elections",
    excerpt:
      "Arkadia and especially Suara.com feel proud to be able to continue our commitment to be involved in efforts related to fact-checking and fighting hoaxes.",
    content: [
      "Showing its commitment as one of the hoax-busting institutions in Indonesia, which not only has been collaborating with various other institutions, also as one of the verified fact-checkers under the International Fact-Checking Network (IFCN), Arkadia through its team at Suara.com has again been actively involved in a series of national activities.",
      "This time, through a program coordinated by AMSI in collaboration with the Google News Initiative (GNI), the Arkadia personnel were involved in a series of hoax-busting activities related to the 2020 Simultaneous Local Elections (Pilkada Serentak). The program itself underwent a kick-off a few weeks before the D-Day of the Pilkada which will happen on December 9, 2020.",
      "The activities that are being joined by the Arkadia team this time include fact-checking trainings, followed by live coordinated fact-checking of local election debates on a number of agendas in various regions, before the culmination which will be the collaborative fact-checking and verification during the voting days of the 2020 Simultaneous Local Elections.",
      "Some Suara.com personnel based in Jakarta as well as Suara Regional editors in several regions, joined as participants in the series of training and fact-checking activities. Not only were they actively listening and testing the fact-checking skills they had acquired, they were also actively discussing and synergizing with fellow journalists from various other media in each of the activities they participated in.",
      "What is even more of a pride for Arkadia, of course, is the involvement of two personnel who are GNI trainers as part of the presenters or resource persons in the series of activities. Not just being part of their commitment as trainers in the GNI network, this involvement is also based on their good intention to share knowledge and skills with fellow journalists and fact-check enthusiasts.",
      "Arkadia and especially Suara.com feel proud to be able to continue our commitment to be involved in efforts related to fact-checking and fighting hoaxes. This is because we are aware that disinformation and misinformation are still one of the big scourges in this country that we must face together, and as a media company we have a social responsibility for that.",
    ],
  },

  {
    id: 31,
    category: "STOCK",
    date: "October 24, 2020",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-31.webp"),
    title: "Approved by EGMS, Arkadia Digital Media Performs a Stock Split",
    excerpt:
      "The Company's management explained that the stock split with this ratio --a ratio of 1:5-- is expected to make DIGI's share price more attractive to investors, especially retail investors.",
    content: [
      "Jakarta - Following approval from the Extraordinary General Meeting of Shareholders (EGMS), PT Arkadia Digital Media Tbk has successfully implemented a stock split with a 1:5 ratio, making shares more accessible to retail investors.",
      "'The Company's management explained that the stock split with this ratio --a ratio of 1:5-- is expected to make DIGI's share price more attractive to investors, especially retail investors,' stated the company in its official announcement.",
    ],
  },

  {
    id: 30,
    category: "WEBINAR & LAUNCHING",
    date: "November 30, 2020",
    author: "Editorial Team",
    image: getPressReleaseImage("press-release-30.webp"),
    title:
      "Developing Local Content, Suara.com Now Has Regional Pages for 14 Provinces",
    excerpt:
      "The official launch of local pages namely Suara Regional was carried out in conjunction with a webinar themed 'Election Campaign Strategies in the Middle of Pandemic'.",
    content: [
      "PT Arkadia Digital Media Tbk through its subsidiary, the primary news website Suara.com, officially launched local content development in 14 provinces in Indonesia. The launch of the program for local content under the name of Suara Regional was carried out in conjunction with a webinar themed 'Election Campaign Strategies in the Middle of Pandemic', on Friday, August 28, 2020.",
      "A number of respected figures and speakers were present at the launch which was simultaneously held with the webinar. Among them are the Commissioners of both the General Election Commission (KPU) and the Election Supervisory Agency (Bawaslu), representative for the Minister of Home Affairs, the Governor of Central Java, the Governor of East Java, members of the House of Representatives, a number of researchers and political observers, as well as several candidates in the upcoming election for regional head in some regions in Indonesia.",
      "This interesting event was broadcasted live starting at 14.00 WIB through the Zoom video application, as well as on various platforms managed by Suara.com, including its own website page, Suaradotcom Facebook page, Suaradotcom Instagram account, and the Suaradotcom channel on Youtube.",
      "The 14 provinces currently being developed for Suara Regional's content include SuaraSumut.id for North Sumatra, SuaraRiau.id for Riau, SuaraSumsel.id for South Sumatra, SuaraBatam.id for Riau Islands, SuaraJakarta.id for Jakarta greater area, SuaraBanten.id for Banten, SuaraJabar.id for West Java, SuaraJawaTengah.id for Central Java, SuaraJogja.id for DI Yogyakarta, SuaraJatim.id for East Java, SuaraPontianak.id for West Kalimantan, SuaraKaltim.id for East Kalimantan, SuaraSulsel.id for South Sulawesi, and SuaraBali.id for Bali Province.",
      "The CEO of PT Arkadia Digital Media Tbk, Wiliam Martapura said that the launch of these special portals for Suara.com in 14 provinces is part of the Company's development to strengthen local content. It is hoped that in addition to strengthening content, the Company can also collaborate with various local media to grow together and develop digital media ecosystems in various regions.",
      "'In fact, it is not only local content that we hope can grow healthily, with quality and benefit content offering the public in their respective regions, but also local media businesses are expected to develop and grow together, including in terms of educating the public, local governments, and local businesses,' Wiliam said.",
      "Meanwhile, the COO of PT Arkadia Digital Media Tbk who is also the Editor in Chief of Suara.com, Suwarjono, said that there are at least two major challenges to the media amid the Covid-19 pandemic. First, the public needs accurate information to become references in the midst of the infodemic --the flood of information regarding the pandemic. Meanwhile, access to accurate and factual information is very limited due to the pandemic which has cut off many accesses due to safety and health protocols. Secondly, although online media including local media has experienced an increase in traffic, it is not in line with an increase in revenue. Even worse, media revenue from advertisements has mostly decreased, with some of their clients even cutting their cooperation.",
      "'At this difficult time, many new breakthroughs are needed to maintain the existence of media that provide verified information, not hoax or disinformation. It takes a lot of fact-checking journalists in the midst of the current infodemic,' Suwarjono said.",
      "Suwarjono added that local media development is also part of responses to the rapidly increasing needs of local content. If 5-6 years ago digital media readers were mostly concentrated in the Jakarta, Bogor, Tangerang and Bekasi areas, now the percentage of Jabotabek readers has decreased, while accesses for online media in various regions have increased rapidly. The rapid increase occurred in a number of big cities such as Surabaya, Bandung, Medan, Makassar, Semarang, Yogyakarta, Palembang and others. The increase was even higher when the Covid-19 pandemic occurred.",
      "'It seems that people in the midst of a pandemic are looking for information related to Covid around where they live. Whether it's a map of the spread of Covid-19 in the area they live in, any health information around them, or regarding their daily needs. They look for a variety of information that is happening around them. This is also what causes a number of local digital media to have an increase in traffic by up to 200 percent,' Suwarjono said.",
      "Suwarjono added, aside from forming a dedicated team to collaborate with stakeholders, Suara.com will also collaborate with the community and educate the public and communities to become citizen journalists. 'Public literacy is important to build informative and accountable content, so that our digital content will be healthier,' he said.",
      "For the needs of development in these 14 provinces, Suara.com has taken a number of steps, starting from recruiting reporters, contributors, and editors in a number of regions, as well as mapping and designing local content management. The company is also preparing offices to start operations in some of the provincial capitals.",
      "Suara.com's efforts to develop local content also received support from Media Development Investment Fund (MDIF), an international organization that recently supported the development of PT Arkadia Digital Media Tbk. The CEO of MDIF, Harlan Mandel, said: 'Suara.com’s initiative to develop local content isn’t just a significant step for the company, it is also important for the people in 14 provinces who will now be able to access more reliable news and information than ever before. It is also a boost for the local media organisations that Suara.com will be partnering with. We are very excited about this strategy that both strengthens the provision of local information and nurtures local digital media ecosystems.'",
      "Through collaboration with various parties, Suara.com hopes that local content as well as local media businesses can develop and grow together. In the end, this program is not just a development step for Suara.com and PT Arkadia Digital Media Tbk, but also as an effort to help advance and strengthen the media industry, including at the local level, which is expected to add more benefits to the public at large.",
    ],
  },

  {
    id: 29,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
      "During the holy month of Ramadan, Suara.com collaborated with Aksi Cepat Tanggap (ACT) to distribute food assistance to residents in need.",
      "The program was part of Suara.com's commitment to supporting communities and encouraging social awareness through meaningful activities.",
      "The food assistance was distributed to residents who were experiencing economic difficulties, especially during the challenging circumstances of the pandemic.",
      "Through this activity, Suara.com hoped to provide practical support and bring a little happiness to families during Ramadan.",
      "The collaboration with ACT also demonstrated the importance of working together with humanitarian organizations to reach communities more effectively.",
      "Suara.com continues to encourage initiatives that create positive impacts and contribute to society beyond its role as a digital media platform.",
      "This social event reflects the company's commitment to maintaining its connection with the community and supporting those who need assistance.",
    ],
  },

  {
    id: 36,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
      "During the holy month of Ramadan, Suara.com collaborated with Aksi Cepat Tanggap (ACT) to distribute food assistance to residents in need.",
      "The program was part of Suara.com's commitment to supporting communities and encouraging social awareness through meaningful activities.",
      "The food assistance was distributed to residents who were experiencing economic difficulties, especially during the challenging circumstances of the pandemic.",
      "Through this activity, Suara.com hoped to provide practical support and bring a little happiness to families during Ramadan.",
      "The collaboration with ACT also demonstrated the importance of working together with humanitarian organizations to reach communities more effectively.",
      "Suara.com continues to encourage initiatives that create positive impacts and contribute to society beyond its role as a digital media platform.",
      "This social event reflects the company's commitment to maintaining its connection with the community and supporting those who need assistance.",
    ],
  },

  {
    id: 36,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
      "During the holy month of Ramadan, Suara.com collaborated with Aksi Cepat Tanggap (ACT) to distribute food assistance to residents in need.",
      "The program was part of Suara.com's commitment to supporting communities and encouraging social awareness through meaningful activities.",
      "The food assistance was distributed to residents who were experiencing economic difficulties, especially during the challenging circumstances of the pandemic.",
      "Through this activity, Suara.com hoped to provide practical support and bring a little happiness to families during Ramadan.",
      "The collaboration with ACT also demonstrated the importance of working together with humanitarian organizations to reach communities more effectively.",
      "Suara.com continues to encourage initiatives that create positive impacts and contribute to society beyond its role as a digital media platform.",
      "This social event reflects the company's commitment to maintaining its connection with the community and supporting those who need assistance.",
    ],
  },

  {
    id: 36,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
      "During the holy month of Ramadan, Suara.com collaborated with Aksi Cepat Tanggap (ACT) to distribute food assistance to residents in need.",
      "The program was part of Suara.com's commitment to supporting communities and encouraging social awareness through meaningful activities.",
      "The food assistance was distributed to residents who were experiencing economic difficulties, especially during the challenging circumstances of the pandemic.",
      "Through this activity, Suara.com hoped to provide practical support and bring a little happiness to families during Ramadan.",
      "The collaboration with ACT also demonstrated the importance of working together with humanitarian organizations to reach communities more effectively.",
      "Suara.com continues to encourage initiatives that create positive impacts and contribute to society beyond its role as a digital media platform.",
      "This social event reflects the company's commitment to maintaining its connection with the community and supporting those who need assistance.",
    ],
  },

  {
    id: 36,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
      "During the holy month of Ramadan, Suara.com collaborated with Aksi Cepat Tanggap (ACT) to distribute food assistance to residents in need.",
      "The program was part of Suara.com's commitment to supporting communities and encouraging social awareness through meaningful activities.",
      "The food assistance was distributed to residents who were experiencing economic difficulties, especially during the challenging circumstances of the pandemic.",
      "Through this activity, Suara.com hoped to provide practical support and bring a little happiness to families during Ramadan.",
      "The collaboration with ACT also demonstrated the importance of working together with humanitarian organizations to reach communities more effectively.",
      "Suara.com continues to encourage initiatives that create positive impacts and contribute to society beyond its role as a digital media platform.",
      "This social event reflects the company's commitment to maintaining its connection with the community and supporting those who need assistance.",
    ],
  },

  {
    id: 36,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
      "During the holy month of Ramadan, Suara.com collaborated with Aksi Cepat Tanggap (ACT) to distribute food assistance to residents in need.",
      "The program was part of Suara.com's commitment to supporting communities and encouraging social awareness through meaningful activities.",
      "The food assistance was distributed to residents who were experiencing economic difficulties, especially during the challenging circumstances of the pandemic.",
      "Through this activity, Suara.com hoped to provide practical support and bring a little happiness to families during Ramadan.",
      "The collaboration with ACT also demonstrated the importance of working together with humanitarian organizations to reach communities more effectively.",
      "Suara.com continues to encourage initiatives that create positive impacts and contribute to society beyond its role as a digital media platform.",
      "This social event reflects the company's commitment to maintaining its connection with the community and supporting those who need assistance.",
    ],
  },

  {
    id: 36,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
      "During the holy month of Ramadan, Suara.com collaborated with Aksi Cepat Tanggap (ACT) to distribute food assistance to residents in need.",
      "The program was part of Suara.com's commitment to supporting communities and encouraging social awareness through meaningful activities.",
      "The food assistance was distributed to residents who were experiencing economic difficulties, especially during the challenging circumstances of the pandemic.",
      "Through this activity, Suara.com hoped to provide practical support and bring a little happiness to families during Ramadan.",
      "The collaboration with ACT also demonstrated the importance of working together with humanitarian organizations to reach communities more effectively.",
      "Suara.com continues to encourage initiatives that create positive impacts and contribute to society beyond its role as a digital media platform.",
      "This social event reflects the company's commitment to maintaining its connection with the community and supporting those who need assistance.",
    ],
  },

  {
    id: 36,
    category: "CSR",
    date: "May 2, 2021",
    author: "Suara.com Editorial Team",
    image: getPressReleaseImage("press-release-36.webp"),
    title:
      "Social Event During Ramadan, Suara.com and ACT Distribute Food Aid to Resident",
    excerpt:
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
    content: [
      "This is a specific program held by Suara.com to help people who are experiencing difficulties during the month of Ramadan.",
      "During the holy month of Ramadan, Suara.com collaborated with Aksi Cepat Tanggap (ACT) to distribute food assistance to residents in need.",
      "The program was part of Suara.com's commitment to supporting communities and encouraging social awareness through meaningful activities.",
      "The food assistance was distributed to residents who were experiencing economic difficulties, especially during the challenging circumstances of the pandemic.",
      "Through this activity, Suara.com hoped to provide practical support and bring a little happiness to families during Ramadan.",
      "The collaboration with ACT also demonstrated the importance of working together with humanitarian organizations to reach communities more effectively.",
      "Suara.com continues to encourage initiatives that create positive impacts and contribute to society beyond its role as a digital media platform.",
      "This social event reflects the company's commitment to maintaining its connection with the community and supporting those who need assistance.",
    ],
  },
];

const ITEMS_PER_PAGE = 9;

// PAGINATION HELPERS
function getPageNumbers(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}

function Pagination({ currentPage, totalPages, totalItems, onPageChange }) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="mt-14 flex flex-col items-center gap-5">
      <p className="text-sm text-gray-500">
        Showing{" "}
        <span className="font-semibold text-[#412001]">
          {startItem}–{endItem}
        </span>{" "}
        of <span className="font-semibold text-[#412001]">{totalItems}</span>{" "}
        articles
      </p>

      <nav
        aria-label="Pagination"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-11 items-center gap-2 rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-black transition-all hover:border-orange-500 hover:text-orange-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="flex h-11 w-8 items-center justify-center text-gray-400"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={`h-11 cursor-pointer min-w-11 rounded-xl px-3 text-sm font-bold transition-all duration-200 ${
                currentPage === page
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "border border-black/30 bg-white text-black hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex cursor-pointer h-11 items-center gap-2 rounded-xl border border-black/20 bg-white px-4 text-sm font-semibold text-black transition-all hover:border-orange-500 hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRight size={16} />
        </button>
      </nav>
    </div>
  );
}

//  PRESS RELEASE LIST
export default function PressReleaseList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const requestedPage = Number(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(pressReleases.length / ITEMS_PER_PAGE);

  const currentPage = Math.min(
    Math.max(requestedPage, 1),
    Math.max(totalPages, 1),
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentArticles = pressReleases.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setSearchParams(page === 1 ? {} : { page: String(page) });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-[#F5F0E8]">
        <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 sm:px-10 lg:px-16 lg:pb-20 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <Newspaper size={15} />
              News & Announcements
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-[#412001] sm:text-5xl lg:text-6xl">
              Press Release
            </h1>

            <p className="mx-auto my-7 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Stay updated with our latest press releases, corporate
              announcements, and company milestones.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-black/50">
              <Newspaper size={16} />
              <span>{pressReleases.length} Publications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Latest Updates
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#412001] sm:text-3xl">
              Company News & Activities
            </h2>
          </div>

          <p className="text-sm text-gray-400">
            Page {currentPage} of {Math.max(totalPages, 1)}
          </p>
        </div>

        {/* Article Grid */}
        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {currentArticles.map((article) => (
              <article
                key={article.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#412001]/[0.06]"
              >
                <Link
                  to={`/investor-relations/press-release/${article.id}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-[#F0ECE6]"
                >
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[#B9A895]">
                      <Newspaper size={42} strokeWidth={1.2} />
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-500 shadow-sm">
                    {article.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-2 text-xs font-medium text-gray-400">
                    <CalendarDays size={14} />
                    <time>{article.date}</time>
                  </div>

                  <Link
                    to={`/investor-relations/press-release/${article.id}`}
                    className="mb-3"
                  >
                    <h3 className="line-clamp-3 text-lg font-bold leading-snug text-black transition-colors duration-300 group-hover:text-orange-500">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto border-t border-[#F0ECE6] pt-5">
                    <Link
                      to={`/investor-relations/press-release/${article.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#F05825]"
                    >
                      Read Article
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#EAE5DE] bg-white px-6 py-20 text-center">
            <Newspaper
              size={42}
              strokeWidth={1.2}
              className="mx-auto mb-5 text-[#B9A895]"
            />

            <h3 className="text-xl font-bold text-[#412001]">
              No Press Releases Yet
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Press releases will appear here once they have been added.
            </p>
          </div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={pressReleases.length}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}

// PRESS RELEASE DETAIL
export function PressReleaseDetail() {
  const { id } = useParams();

  const article = pressReleases.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
        <div className="max-w-md text-center">
          <Newspaper
            size={48}
            strokeWidth={1.2}
            className="mx-auto mb-5 text-[#C5B7A8]"
          />

          <h1 className="text-2xl font-semibold text-[#412001]">
            Article Not Found
          </h1>

          <p className="mt-3 text-sm leading-7 text-[#817365]">
            The press release you are looking for may have been removed or is no
            longer available.
          </p>

          <Link
            to="/investor-relations/press-release"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            <ArrowLeft size={16} />
            Back to Press Releases
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-[#F5F0E8] px-6 pb-16 pt-12 sm:pb-20 sm:pt-16 sm:px-10 lg:px-18">
        <div className="mx-auto">
          <Link
            to="/investor-relations/press-release"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#725D4B] transition hover:text-[#F05825]"
          >
            <ArrowLeft size={17} />
            Back to Press Releases
          </Link>

          <div className="mb-6">
            <span className="rounded-full bg-orange-500 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#817365]">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} />
              {article.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock3 size={16} />
              Press Release
            </span>
          </div>

          <p className="mt-5 text-sm text-[#817365]">
            By{" "}
            <span className="font-semibold text-black">{article.author}</span>
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 py-14 sm:py-20 sm:px-10 lg:px-18">
        <article className="mx-auto">
          {article.image && (
            <div className="mb-12 aspect-[16/9] overflow-hidden rounded-2xl bg-[#F5F0E8]">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="mb-10 border-l-4 border-[#F05825] pl-6">
            <p className="text-lg font-medium leading-8 text-black/70 italic sm:text-xl sm:leading-9">
              {article.excerpt}
            </p>
          </div>

          <div className="space-y-6">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-8 text-black/85">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-black/20 pt-8">
            <Link
              to="/investor-relations/press-release"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 transition-all hover:gap-3"
            >
              <ArrowLeft size={17} />
              Back to All Press Releases
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
