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
    category: "GMS & FUNDING",
    date: "July 11, 2020",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-29.webp"),
    title: "Arkadia's GMS Officially Approved Funding from MDIF",
    excerpt:
      "It is expected that soon this funding from MDIF will strengthen the capital structure and business development of the Company.",
    content: [
      "Held during the pandemic with the status of Transitional Large-Scale Social Restrictions (PSBB) applied in Jakarta, the Company's agenda this time must also follow the protocol for Covid-19 measurement. Therefore, even though the GMS was held at Jambuluwuk Thamrin Hotel, Jakarta, the rules of physical distancing were strictly implemented, with part of the agenda held digitally through video conferencing media.",
      "Started around 2:00 p.m. local time, the GMS decided to approve and endorse several important agendas. One of the specific agenda of the Independent GMS is approval of the entry of funding from Media Development Investment Fund (MDIF) Media Finance I B.V. to PT Arkadia Digital Media Tbk. MDIF, which has operated in more than 40 countries, is known as an institution committed in helping the development of independent media, and competitive, sustainable and resilient media businesses.",
      "'We welcome the collaboration with MDIF, an institution that has a long-standing reputation and commitment in supporting the development of free and independent media globally. We have a common vision to jointly provide news, quality information needed by the community. And this funding will greatly assist the Company's effort in developing the digital ecosystem that we are currently building,' said the CEO of PT Arkadia Digital Media Tbk, William Martaputra.",
      "Wiliam explained, the funding from MDIF is in the form of convertible bonds and is mandatory in nature, which would be converted to IDR 1,400 per share. It is expected that soon this funding will strengthen the capital structure and business development of the Company.",
      "Furthermore, COO of PT Arkadia Digital Media Tbk, Suwarjono said the inclusion of funding from MDIF is in line with the Company's development plan to strengthen regional content and regional media networks, as well as the development of news platforms to strengthen the digital ecosystem.",
      "'Local content and media in the future are increasingly needed to balance various local government policies, encourage the active participation of communities in the region, raise local issues to the wider region and support information that is appropriate to the needs of local communities. In addition to content, it also helps sustainability for local media with a variety of media business models today,' said Suwarjono.",
      "As part of this plan, Suwarjono added, the Company is preparing a digital ecosystem that integrates news, verified information created by journalists, with community networks, local media networks, and MSME services in various regions through a news-commerce platform which is expected to become one of new business models in the area. With it, hopefully the sustainability of the media in the regions will be stronger.",
      "Regarding the investment in PT Arkadia Digital Media Tbk, MDIF welcomes the approval of the process through the GMS forum. MDIF’s CEO, Harlan Mandel, said, 'we are excited to be investing in PT Arkadia Digital Media Tbk and to support the company as it continues its growth trajectory. Our investment will enable the company to further develop its regional content and networks, providing more locally-based news and information that shines a light on issues that would otherwise be ignored.'",
      "MDIF is a not-for-profit investment fund based in New York, United States. It provides debt and equity financing to independent media companies in countries where access to free and independent media is under threat. In addition to the investment approval, the Company's AGMS has also approved and ratified the 2019 Annual Report of PT Arkadia Digital Media Tbk, including the Financial Statements for Fiscal Year 2019. Based on the Financial Statements this time, the Company recorded a revenue of IDR 37.66 billion in 2019, with operating profit of IDR 1.35 billion.",
      "Although the Company also has to deal with difficult business situations due to the Covid-19 pandemic, optimism expressed at the end of last year was maintained. Not just surviving, throughout 2020 so far, the Company has also been proven to continue to carry out several development steps. In March for example, in addition to launching the new Suara.com logo, Arkadia has also launched the Iklandisini.com advertising platform. While this July, the development of several new Suara Regional pages has also begun, adding to the five that have existed since 2019. A total of six regional media that will be launched this July are Suara Sumatera Utara, Suara Sumatera Selatan, Suara Batam, Suara Kalimantan Barat, Suara Sulawesi Selatan and Suara Bali.",
      "Launching its first news portal namely Suara.com in 2014, PT Arkadia Digital Media Tbk is a digital media company that currently has 7 other vertical portals namely Matamata.com, Bolatimes.com, Hitekno.com, Guideku.com, Dewiku.com, Mobimoto.com and Himedik.com. In 2018 it officially became a public company and in 2019 began developing the Serbada.com news-commerce as well as developing regional media called Suara Regional. In 2020, it launched Iklandisini.com, a standalone platform for advertisers.",
      "MDIF is a not-for-profit investment fund based in New York, United States. It provides debt and equity financing to independent media companies in countries where access to free and independent media is under threat. With more than $105 million assets under management, since 1996 MDIF has invested more than $230 million in 120 independent media businesses in 42 countries. Its investments help independent media around the world provide the news, information and debate that people need to build free, thriving societies.",
    ],
  },

  {
    id: 28,
    category: "NEW PROGRAM",
    date: "June 2, 2020",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-28.webp"),
    title:
      "Arkadia Now Has a New Regular Webinar Program Called 'Bincang Online'",
    excerpt:
      "Kick-started on May 7, 2020, the inaugural Bincang Online presented the topic 'Strategy in the Storm: Online Media Business during the Covid-19 Pandemic'.",
    content: [
      "Kick-started on May 7, 2020, the inaugural Bincang Online presented the topic 'Strategy in the Storm: Online Media Business during the Covid-19 Pandemic'. The Covid-19 pandemic affected almost all business sectors, including the media business, both nationally and globally. Like almost all other media, PT Arkadia Digital Media Tbk also felt the impact of the pandemic on its business.",
      "Even so, we at the Company do not want to easily give up on the situation, and always try to make a breakthrough and develop new ideas, even in this difficult period. Starting from adjusting the working system to WFH, changing content presentation, releasing news products, and even creating new programs.",
      "One of the mediums that are known to be rife with the ongoing pandemic is the video conference platform and its various uses. Activities of internal meetings via the internet, including online seminars that increasingly popularized the term 'webinar', soon can be considered as a new regular activity for almost everyone.",
      "In the middle of that, Arkadia finally made its own program with the name 'Bincang Online'. Kick-started on May 7, 2020, our inaugural Bincang Online presented the topic 'Strategy in the Storm: Online Media Business during the Covid-19 Pandemic'. The program, which was also aired live via the Suara.com social media page, was in fact welcomed with enthusiasm, as evidenced by the 200 participants who logged-in via the Zoom application.",
      "The inaugural Bincang Online itself presented Editor In Chief of Suara.com, Suwarjono, as one of the speakers, along with CEO of Katadata, Metta Darmasaputra, and Internews Representative in Indonesia, Arfi Bambani. Both leaders of Suara.com and Kadadata.co.id, explained how their media dealt with the pandemic situation and their views for the future. While Arfi of Internews explained about the various opportunities that local media in Indonesia could try, including through schemes of grant or funding.",
      "The Bincang Online program itself has since then become an Arkadia routine program, which is strived to be held regularly at least once a week with various interesting topics. Presented with a style that is sometimes adjusted to the sources and topic, including the ones involving writers, entrepreneurs, health experts and so on, the Bincang Online turns out to get a positive response.",
      "'We ensure that this will become a routine program going forward, by presenting various topics and sources selected based on interesting fields and what we consider useful to our readers and the public. This is our main goal in this program, which is trying to give a program that is beneficial to the public, in addition to our regular news and information through our news portals,' said Suwarjono.",
    ],
  },

  {
    id: 27,
    category: "AWARDS",
    date: "April 30, 2020",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-27.webp"),
    title:
      "AJI-UNICEF Selected a Suara.com Article for Best Report on Children Issues",
    excerpt:
      "One of Suara.com's stories entitled 'Threatened by Death Penalty, Judicial Irregularities for Mispo the Papuan Child', won an award from the Indonesian Alliance of Independent Journalists (AJI Indonesia) in collaboration with UNICEF.",
    content: [
      "The award was warmly welcomed by the Editor in Chief not only as a pride but also as additional spirit for the team especially in the midst of Covid-19 pandemic. One of Suara.com's stories entitled 'Threatened by Death Penalty, Judicial Irregularities for Mispo the Papuan Child', won an award from the Indonesian Alliance of Independent Journalists (AJI Indonesia) in collaboration with UNICEF. The special news coverage from reporter Erick Tanjung and editor Reza Gunadha won the Print and Online Media categories at the 2020 Children's Issues Best Coverage Awards.",
      "For information, awards for the print/online media, as well as television, radio and photo categories have been regularly held in recent years by AJI and UNICEF. This awards event was also held as part of the World Immunization Week celebrations organized by the Ministry of Health.",
      "The award was warmly welcomed by the Editor in Chief of Suara.com who is also the COO of PT Arkadia Digital Media Tbk, Suwarjono. According to him, this achievement not only proves that Suara.com's contents continue to receive positive recognition, but also can also add enthusiasm in the daily work of the Jakarta-based media editorial team.",
      "'Especially in the midst of this Corona pandemic situation, where like many other companies, since before the implementation of the PSBB in Jabodetabek we have implemented a work from home (WFH) system. So, this award has spurred us all to be even more creative, more productive, to carry out our role as the media and to give our best for the public,' said Suwarjono.",
      "Initially, AJI-UNICEF, with the support of the Indonesian Ministry of Health planned to hold an award night in a warm situation. However, due to the situation of the Covid-19 pandemic, the announcement was finally delivered online after a related webinar event on Wednesday, April 29th, 2020.",
      "In the announcement, UNICEF Indonesia's representative, Debora Comini, said that the media is an important partner for them because it has the power to raise various topics in the public sphere. 'Apart from that, mass media is also important because its coverage triggers important conversations and influences positive change,' she said.",
      "For this 2020 Best Journalistic Works on Children Issues Awards, the committee stated that they have received a total of 413 stories within the four competition categories. These hundreds of works were then evaluated by a panel of jury consisting of professional practitioners, observers of children's issues, and representatives of UNICEF.",
      "Suara.com birthday celebration with the ceremony, launching sessions and other activities was a lively and exciting event. Including when employees can also enjoy things such as quizzes and games, health discussion and free medical checks, delicious buffet, and of course an entertainment session presenting Steven & Coconut Treez band and singer Diana Dee. It was really a pleasant day.",
    ],
  },

  {
    id: 26,
    category: "NEW PROGRAM",
    date: "March 31, 2020",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-26.webp"),
    title: "More than 'WFH', Arkadia Follows All Covid-19 Rules and Protocol",
    excerpt:
      "More than just to obey the rules, the Company views that following recommendations from the government in this pandemic is very important for the good of its employees as well as the society.",
    content: [
      "More than just to obey the rules, the Company views that following recommendations from the government in this pandemic is very important for the good of its employees as well as the society.",
      "The Covid-19 pandemic which is rapidly spreading to various parts of the world, has finally also arrived in Indonesia. At the beginning of March 2020 to be precise, the Indonesian government and public which previously were quite sure that there was no positive case of Covid-19, had to get the news of its first positive patient. Then shortly thereafter, patients after patients were recorded in various places --and the numbers soon continued to grow.",
      "In a matter of a few days from the first patient, one of the public figures --the Indonesian Minister of Transportation-- was listed as coronavirus positive. This was immediately followed by various quick steps, one of which was the implementation of a more stringent Covid-19 handling protocol, as well as emergency status in several areas, more rapid tests and PCR tests, and wide calls for all institutions and companies to let or arrange their employees to work from home (WFH).",
      "And like many other companies, PT Arkadia Digital Media Tbk which always complies with the rules, has also immediately followed the various protocols and recommendations. But more than just the principle for obedience of the rules, the Company views that following the recommendations or suggestions of the government and people who handle this pandemic is something important. It is important generally for the good of society, and especially of course it is also important for the wellbeing of all our employees.",
      "Initially, when there was still no large-scale social restriction (PSBB) status in various places or in Jakarta, the Company implemented a partial remote working system for its employees. Then in the following week, as the status of the region changed following the rise of Covid-19 cases, Arkadia employees --both in the Jakarta and Yogyakarta offices-- were all told to fully work from home. Of course, our division heads and managers have also immediately managed other related things following this development.",
      "Not only for working system arrangements, the maximum Covid-19 handling protocol was immediately implemented at the PT Arkadia Digital Media Tbk offices in Jakarta and Yogyakarta. This includes adding more equipments such as hand washing stations, hand sanitizers, masks, and so on. The company also provides vitamin supplements that were distributed to all employees, while also reminding them to always keep healthy with their families.",
      "Further support was also carried out in the form of data collection on the health conditions and neighbourhood status of the employees; providing advice or solutions to any problems that may arise related to the pandemic, including options for rapid testing or swab test if needed and for employees who are suspected or at risk; as well as coordinating with health units and other government agencies. And meanwhile, the Company still tries to run its business units optimally, publishing its news portals as important sources of information for the public in the midst of this pandemic.",
    ],
  },

  {
    id: 25,
    category: "ANNIVERSARY & LAUNCHING",
    date: "March 10, 2020",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-25.webp"),
    title: "A Fresh New Logo for Suara.com and Launching of Iklandisini.com",
    excerpt:
      "Coincided with the momentum of Suara.com's 6th birthday celebration, PT Arkadia Digital Media Tbk conducted two important launches: the new logo for Suara.com and the launch of the Iklandisini.com platform.",
    content: [
      "The new logo shows Suara.com's position, which has become increasingly solid in the midst of hard competition in the online media industry in Indonesia. Coincided with the momentum of Suara.com's 6th birthday celebration which was held on March 9, 2020, PT Arkadia Digital Media Tbk conducted two important launches. The first is the new logo for Suara.com as the flagship portal for the Company's businesses; and the second is the launch of the Iklandisini.com platform.",
      "This launching activity was carried out in conjunction with a small internal thanksgiving event at Suara.com's 6th Anniversary which was held at the office on Sisingamangaraja, Jakarta. Although the event was held in Jakarta, the team in Yogyakarta also enjoyed the happy atmosphere through live video streaming, including interacting with the management in Jakarta.",
      "The launch of these two new things was carried out after a brief ceremony of Suara.com's birthday reflection which was attended by all the Board of Commissioners and Directors of the Company. In front of the employees and several close partners who were also invited, President Commissioner of PT Arkadia Digital Media Tbk, Stephen Sulistyo, underlined the cooperation and great role of all elements in the Company in bringing the success of Suara.com and its sister portals so far.",
      "The new Suara.com logo itself appears with bolder but dynamic characters, which is showed by the font type, size and color settings. This appearance shows Suara.com's position, which has become increasingly solid in the midst of hard competition in the online media industry in Indonesia, and yet ready to continue growing and do more with all its potential.",
      "As for Iklandisini.com, the platform is primarily built a place to accommodate small and medium entrepreneurs who need to place digital ads but may have been difficult to do so --either because of price or no platform to use. This self-service advertising platform is made as neat and as good as possible, so advertisers can use it as easy as they could.",
      "One of the main advantages of using Iklandisini.com for advertisements is that not only on Suara.com, but there are also options to involve placement on several vertical portals in the Arkadia group --even more the potential to be placed on dozens of local online media accross Indonesia under Suara.com's network.",
      "Eventually, this year's Suara.com birthday celebration with the ceremony, launching sessions and other activities was a lively and exciting event. Including when employees can also enjoy things such as quizzes and games, health discussion and free medical checks, delicious buffet, and of course an entertainment session presenting Steven & Coconut Treez band and singer Diana Dee. It was really a pleasant day.",
    ],
  },

  {
    id: 24,
    category: "LAUNCHING",
    date: "January 17, 2020",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-24.webp"),
    title:
      "SuaraJogja.id is Launched and Its New Office Officially Operates in Yogyakarta",
    excerpt:
      "PT Arkadia Digital Media Tbk continues to spread its wings with the soft launching of Suarajogja.id, which is part of Suara.com network, along with the inauguration of its new office in Yogyakarta.",
    content: [
      "The launching and inauguration of Suarajogja.id's new logo were held in its new office at Condongcatur, which is also the office of seven Arkadia's vertical portals. PT Arkadia Digital Media Tbk continues to spread its wings. This time around, Suarajogja.id which is part of Suara.com, held a soft launching event on Thursday afternoon, January 16, 2020.",
      "The event was also the inauguration of the new logo, as well as Suarajogja.id's new office, which is located at Jalan Prayan I, Soropadan, Condongcatur, Sleman, Yogyakarta. The office is also used by seven Arkadia Digital Media vertical portals, namely Matamata.com, Bolatimes.com, Hitekno.com, Dewiku.com, Mobimoto.com, Guideku.com and Himedik.com.",
      "In his remarks, Suara.com's Editor in Chief Suwarjono said that Suarajogja.id and its new office is part of a pioneering project that would later be present in several other cities in Indonesia. 'We are doing this development in Yogyakarta and several other cities. Yogyakarta (SuaraJogja.id) is the pilot project, and we have prepared others as well. Later there will be similar development in several cities, but for now it's Yogyakarta first,' said Suwarjono.",
      "Another thing stated by Suwarjono is the purpose of building media in various regions, which are related to the sustainability of media business. He also invited all mass media, especially in Yogyakarta, to get together and commit to maintaining business continuity, developing and increasing cooperation, so that they all can grow and progress together.",
      "The Chairperson of the Indonesian Cyber Media Association (AMSI) in Yogyakarta, Anton Wahyu Prihartono, who also attended the launching, voiced similar thoughts, especially regarding the collaboration of all media that he believed could spread good quality and balanced information to the public.",
    ],
  },

  {
    id: 23,
    category: "GATHERING",
    date: "December 16, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-23.webp"),
    title: "Two Joyful and Relaxing Days for Arkadia Employees in Ciawi",
    excerpt:
      "Around 100 employees of PT Arkadia Digital Media Tbk from Jakarta office enjoyed a refreshing two days gathering out of town at one of the resorts in Ciawi area, Puncak, West Java.",
    content: [
      "Around 100 employees of PT Arkadia Digital Media Tbk from Jakarta office, once again enjoyed a refreshing two days gathering out of town. Around 100 employees of PT Arkadia Digital Media Tbk from Jakarta office, once again enjoyed a refreshing gathering out of town. Top management, division managers, editors and reporters, as well as other office staff, participated in this event.",
      "The event on December 12-13, 2019, was held at one of the resorts in Ciawi area, Puncak, West Java. Departing with two buses early morning on Thursday, where several employees took their own vehicles, for two full days they all enjoyed various exciting activities, before returning to Jakarta on Friday afternoon.",
      "Part of the gathering were some outbound activities aimed to strengthen the sense of Arkadia family and foster cohesiveness. Full of enthusiasm, all participants enjoyed the exciting activities filled with a number of games.",
      "Other events include a series of internal sports matches between employees, including mini futsal for male employees and tug of war for women. And even though it was supposed to be relaxing and full of laughter, the employees keep trying their best to win every game.",
      "An evening of entertainment filled with exciting internal acts, as well as a local singer performance, is equally lively. A large number of doorprizes were distributed during the night, which gave 'happy faces' to most of the employees.",
      "On the way back to Jakarta on Friday afternoon, in addition to a chance for buying souvenirs, all the employees then enjoyed eating together at an iconic restaurant in Sentul area. And full stomach with relaxed feeling of the participants finally closed the two days of pleasantful gathering.",
    ],
  },

  {
    id: 22,
    category: "AWARDS",
    date: "December 10, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-22.webp"),
    title:
      "Regarded as Inspiring Media, Suara.com Received 'Piala Merak 2019' Award",
    excerpt:
      "Suara.com was chosen as one of the 'Inspiring Media' in the awarding of Piala Merak 2019 by the Ministry of Women's Empowerment and Child Protection for often publishing reports related to children's issues.",
    content: [
      "The award is a program of the Ministry of Women's Empowerment and Child Protection of the Republic of Indonesia (Kemen PPPA).",
      "Suara.com as the leading news portal of PT Arkadia Digital Media Tbk has just been regarded as an 'Inspiring Media' in the awarding of Piala Merak 2019. The term 'Merak' itself stands for 'Media Ramah Anak' or Child Friendly Media. This award is a program of the Ministry of Women's Empowerment and Child Protection of the Republic of Indonesia (Kemen PPPA).",
      "In the awarding ceremony that was held on Monday, December 9, 2019, Suara.com was chosen as one of the media that often published reports related to children's issues through its publication.",
      "'I hope the award presented will be a motivation for enthusiasm to work in protecting Indonesian children which are approximately 80 million or around 30.5 percent of the entire population of Indonesia,' said the Minister of PPPA, Bintang Puspayoga, in her remarks at Wisma Antara, Jakarta.",
      "The award was personally given by Minister Bintang to Ririn Indriani, Assistant Managing Editor of lifestyle and health desks who represented Suara.com that evening. Besides Suara.com, two other media that received the same award at this year's event were Kompas and Antara News Agency.",
    ],
  },

  {
    id: 21,
    category: "PUBLIC EXPOSE",
    date: "December 6, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-21.webp"),
    title:
      "Satisfying Achievements, Arkadia Digital Media Looks Toward 2020 with Optimism",
    excerpt:
      "PT Arkadia Digital Media Tbk recorded revenues of Rp 23.54 billion as of September 30, 2019, a 16.4 percent increase compared to the same period last year, showing the promising nature of the digital media business.",
    content: [
      "'The Company's performance nearing the end of this year is quite satisfying. Our achievement is above initial expectations, and this shows that the digital media business is very promising.' PT Arkadia Digital Media Tbk (DIGI) exposed its achievements and performance during the year on a 2019 Public Expose agenda. The event was held in Jakarta, on Thursday, December 5, 2019.",
      "Financially, based on the third quarter financial statements submitted to the Indonesia Stock Exchange (IDX) and publicly accessible, as of September 30, 2019, PT Arkadia Digital Media Tbk recorded revenues of Rp 23.54 billion. This was a 16.4 percent increase compared to the same period last year, amounting to Rp 20.21 billion.",
      "'The Company's performance nearing the end of this year is quite satisfying. Our achievement is above initial expectations, and this shows that the digital media business is very promising. Stronger contents, distribution, innovation, and stabilized business lines make the achievements of this year that give us proud,' said the Company's CEO Wiliam Martaputra.",
      "Achievements of this year includes the launch of five Suara.com Regional as a special channel for local (regional) news in March 2019. Within a matter of months, the five which are Suara Banten, Suara Jabar, Suara Jateng, Suara Jogja and Suara Jatim, proven to be potential and interesting to readers, thus opening up maximum development and potential launching of more Suara.com Regional.",
      "Two other developments are in a very early stage; the first was the launch of a membership system which also includes features to maximize user-generated content (UGC). The second one was the launch of Serbada.com, an e-commerce platform that introduces the concept of 'news-commerce' in early November 2019, also with a big potential to be developed.",
      "Suara.com itself has progressed quite rapidly during the year, which can be seen from the amount of content production as well as the variety and quality of them. Some prominent features such as Cek Fakta, Khas (Special Reports), as well as dozens of daily videos from reporters on scene, become products that are increasingly loved by readers.",
      "Cek Fakta even has its own achievement when Suara.com was finally acknowledged as one of the verified online media in the International Fact-Checking Network (IFCN) list in October 2019. Also, various multimedia products through Arkadia Production are increasingly popular and recognized as part of the Company's strength.",
      "Some vertical portals such as Matamata.com and Hitekno.com have also made their achievement. Matamata.com for example, continues to record progress, both in terms of popularity and traffic achievement, and currently has been routinely ranked in the Alexa Indonesia top 45. Likewise, Hitekno.com which in recent months has been growing a lot, is now become the number one tech portal in Indonesia.",
      "'Millennial generation, young digital media users, prefer segmented portals more. This is what makes our 7 vertical portals grow rapidly,' said Suwarjono, the Editor in Chief for all media portals under PT Arkadia Digital Media Tbk.",
      "Based on the achievements, Suwarjono said the Company can go into 2020 with optimism, both in terms of achievements and business performance. He also ensured that there are several more development programs been prepared for the Company's business units for the next year.",
    ],
  },

  {
    id: 20,
    category: "PARTNERSHIP",
    date: "November 29, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-20.webp"),
    title:
      "Suara.com Partners with Dailymotion to Accelerate Its Video Content Strategy and Increase Audience Reach",
    excerpt:
      "Suara.com announces its partnership with Dailymotion to accelerate its video content strategy, providing a more robust video player and helping engage audiences while increasing revenue opportunities.",
    content: [
      "'Suara.com and Dailymotion collaboration is part of our effort to help public to get information quickly, completely, deeply and reliably, especially in video content.' As one of Indonesia's leading digital publications, Suara.com, part of Arkadia Digital Media, is announcing its partnership with Dailymotion, a content discovery platform with leading video player technology.",
      "Sharing the latest news and content in all types of digital format, Suara.com is determined to provide a new color for online media maps in Indonesia. In an effort to play a key role in the digital age, Suara.com has tapped into new digital formats and video content hoping to become an accessible and reliable source for the public. Through this partnership with Dailymotion, Suara.com will accelerate its video content strategy to increase audience reach and interact deeper with its readers.",
      "With Dailymotion's cutting-edge video solution technology, Suara.com will have a more robust video player, which will also help engage audiences and increase revenue opportunities. With a toolbox to keep 100% of their content strategy, Dailymotion's video player allows Suara.com to increase visitor engagement and control the ads appearing on videos to monetize their existing content without any added costs. With full ownership of the video player, these customizations will be able to advance the digital transformation of Suara.com.",
      "'We believe in providing world-class tools and technology for leading publishers like Suara.com,' commented Antoine Nazaret, Vice President of Dailymotion APAC, 'and we will continue to support local publishers in today's digital age.'",
      "'Suara.com and Dailymotion collaboration is part of our effort to help public to get information quickly, completely, deeply and reliably, especially in video content,' said Suwarjono, Editor in Chief of Suara.com.",
      "Together with Suara.com, Dailymotion believes its video technology solutions will continue to support renowned publishers in expanding their digital footprints, enriching their content, and reaching a wider audience.",
      "Founded in 2005, Dailymotion is a global video streaming service that connects over 250 million entertainment-seekers to their personal world of news and entertainment. Built on a clever player, intuitive algorithm, and on carefully-selected recommendations made by experts who really love great videos, Dailymotion is the one-stop place for enjoying stories by/from the best creators around in one heightened video experience. Dailymotion is currently owned by Vivendi and headquartered in Paris with offices in New York, Singapore and Marseille.",
    ],
  },

  {
    id: 19,
    category: "NEW PROGRAM",
    date: "November 25, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-19.webp"),
    title:
      "Two Days Training for Fact-Checking, Both in Arkadia Jakarta and Yogyakarta Offices",
    excerpt:
      "PT Arkadia Digital Media Tbk held fact check training in both Jakarta and Yogyakarta offices as part of a simultaneous program involving 400 journalists in 23 cities, managed by AJI Indonesia with Google News Initiative and Internews.",
    content: [
      "As a big group that houses Suara.com and 7 other sites, PT Arkadia Digital Media Tbk has again held a couple of fact check training in separate offices in Jakarta and Yogyakarta.",
      "In Yogyakarta, Arkadia Digital Media took part in a simultaneous fact check training program in 23 cities involving a total of around 400 journalists, managed by AJI Indonesia together with Google News Initiative and Internews, on November 23 and 24. In this training, Arsito Hidayatullah, the Managing Editor of Suara.com as well as a Google certified trainer, shared his knowledge with a fellow trainer, Siti Masnidar from Jambi.",
      "Meanwhile, two days earlier in the Arkadia's Jakarta office, similar training was also held in two consecutive days. There, Arsito was accompanied by Asnil Bambani, a journalist who is also the Chairperson of AJI Jakarta.",
      "'This kind of training is important, because as journalists ourselves, it is indeed our obligation to reveal the truth of information, the facts behind issues. And at Arkadia, especially at Suara.com, we have been seriously trying to produce fact check articles regularly during this year,' Arsito said.",
      "In both trainings, the participants which are editorial staffs of each the Jakarta and Yogyakarta office, are taught several tips and tools for verifying or checking facts of information. They were also given tips related to digital security. More than just presentation and talks, the two days activities were mostly filled with exercises using tools that had been shared with the participants.",
    ],
  },

  {
    id: 18,
    category: "LAUNCHING",
    date: "November 11, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-18.webp"),
    title:
      "Arkadia Launches New Platform, a News-Commerce Site Named Serbada.com",
    excerpt:
      "Arkadia Digital Media launched Serbada.com, an e-commerce site that introduces the concept of 'news-commerce' where transactions to merchants begin with content including articles, photos, infographics and videos.",
    content: [
      "The launching of Serbada.com was deliberately carried out on November 11 or 11/11 which is also known as the Global Online Shopping Festival 11.11.",
      "In the 2nd week of November 2019, Arkadia Digital Media has launched another business unit or new product. This time around, the parent company of Suara.com and several other portals officially released an e-commerce site called the Serbada.com.",
      "The launching of Serbada.com itself was deliberately carried out on November 11 or 11/11 which is also known as the Global Online Shopping Festival 11.11 --as promoted by the Alibaba Group among others.",
      "'Serbada.com is part of a platform we call news-commerce, where transactions to merchants begin with contents including articles, photos, infographics and or videos. From the content that is relevant to products, the user will be able to decide to buy or not a variety of products. If you are interested, you can directly do transaction, without having to go to another platform,' explained Suwarjono, COO of PT Arkadia Digital Media Tbk who is also the Editor in Chief of Suara.com.",
      "'It does not mean that we will lower the concentration of managing and developing our media which so far have grown in a good direction and recognized by many parties, but rather this is to give more value to our audience or readers,' Suwarjono added.",
      "One of the considerations of launching Serbada.com was also the high rate of growth of e-commerce in Indonesia. One reference is the data from Global Web Index which among other things states that Indonesia has the highest rank of e-commerce activity in the world, where 90 percent of internet users (aged 16-64 years) claimed to have shopped products/services online.",
      "'It means that the potential is still big, and with the right business and development model, we are optimistic that we can also participate in this segment,' said Suwarjono, who on that Monday of November 11 happened to be in China attending the Alibaba Group event in Hangzhou.",
      "The soft launching of Serbada.com on Monday itself, besides being marked by an internal event at the Arkadia's office, was also showed by the presence of the Arkadia and Serbada teams in several trading center locations in Jakarta. At the moment, hundreds of products are already available at Serbada.com, ranging from clothing, books, cameras to drones, jewelry, and so on. In the future, all kinds of products and services that are interesting or needed by the public are hoped to be available on Serbada.com, a site which name is indeed derived from the combination of words 'serba+ada' (everything is available).",
    ],
  },

  {
    id: 17,
    category: "IFCN",
    date: "October 29, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-17.webp"),
    title:
      "Suara.com Officially Becomes One of the Media Under the International Fact-Checking Network",
    excerpt:
      "Suara.com has officially entered the International Fact-Checking Network (IFCN) after consistent efforts with its Cek Fakta contents.",
    content: [
      "Suara.com team has been producing Cek Fakta (fact-checking) contents regularly since last year which can be found in a special page collection.",
      "After doing serious efforts in verifying issues or claims whose truth is not yet clear, especially through the Cek Fakta page, Suara.com has now officially entered the global media network under the International Fact-Checking Network (IFCN).",
      "'Congratulations, your organization is now a verified signatory of the IFCN code of principles,' wrote the IFCN in an email to the Suara.com Fact Check team, on Monday, October 28.",
      "To be noted, as explained by the IFCN on its online pages, the code of principles is for organizations that regularly publish nonpartisan reports on the accuracy of statements by public figures, major institutions, and other widely circulated claims of interest to society. This includes the verification of multimedia content that reached a wide public with the intention to deceive.",
      "IFCN itself is a fact-checking network founded and managed by the Poynter Institute, a leading nonprofit research organization and journalism school based in St. Petersburg, Florida. At the moment, there are 71 global media or organizations that have been verified in the IFCN list, plus 9 more in the process of renewal. Besides Suara.com, currently there are also Liputan6.com, Tirto.id, Kompas.com, Tempo.co, and Mafindo from Indonesia.",
      "The good news was welcomed by Suara.com's Editor in Chief, Suwarjono, who felt that it's about time for Suara.com to enter the IFCN network, especially with the team's commitment and continuity of Cek Fakta contents so far. He also emphasized that in the future, Suara.com would be working more serious for these contents, including making the necessary development.",
      "Suara.com's practical involvement in producing Cek Fakta contents began in May 2018 when together with around 20 media joined to declare the launching of Cekfakta.com collaboration platform. The web itself, as a channel of efforts to fight disinformation, is also a manifestation of Indonesia mainstream media's concern about the rise of hoaxes in Indonesia.",
      "The Cek Fakta contents produced by Suara.com team can be found in a special page collection. On this page, readers can also find a little information about what are the Cek Fakta contents, the verification methodology and the publication, the team that manages it, including information on how the public can interact with the team.",
    ],
  },

  {
    id: 16,
    category: "AWARDS",
    date: "October 1, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-16.webp"),
    title:
      "Journalists of Arkadia Continue to Be Recognized of Their Great Works",
    excerpt:
      "The most recent and quite prestige event was the MH Thamrin Journalism Award where a Suara.com journalist's work was announced as one of the winners.",
    content: [
      "The most recent and quite prestige event was the MH Thamrin Journalism Award where a Suara.com journalist's work was announced as one of the winners.",
      "Journalists and writers in Arkadia Digital Media can be considered to be great people; they're mostly young, creative, and always have the determination for good achievement and to move forward.",
      "Evidence of the quality of the editorial team can be seen, among others, from various accomplishments that have been achieved so far. There are for instance, various workshops and training programs that have often included Suara.com journalists through selection.",
      "A couple of programs that are quite often are health journalism and banking journalism education programs. Held almost every year, Arkadia journalists usually qualify for this event, and are entitled to get funding for their stories.",
      "A few weeks ago, for example, a Suara.com journalist also selected as the best 3 in oil palm coverage workshops that were part of the Ministry of Finance program. One of the 'prices' was attending a related event in India.",
      "Not only in government institution's programs, even in competitions or similar programs held by private companies, Arkadia journalists have also been successful several times. One recent example is an article related to the newly introduced Male Beauty Clinic organized by Zap.",
      "Then, the most recent and quite prestige event was the MH Thamrin Journalism Award held by PWI Jaya, where in the announcement on 26 September, a Suara.com journalist's work was also announced as one of the winners.",
      "At this PWI Jaya event, Suara.com was awarded 2nd place in the General Article Category, through a paper entitled 'Huts in the Under Bridge in Jakarta, Life Struggle for Sex Workers with AIDS'. The article is the result of Erick Tanjung's reportage that has been published several months before.",
      "The various successes above certainly increase the spirit, not only for the journalists receiving awards, but also their fellow editors and other team's personnel in Arkadia Digital Media. Achievement that we should be proud of, which at the same time could becomes a trigger to achieve even better in the future.",
    ],
  },

  {
    id: 15,
    category: "NETWORK",
    date: "September 20, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-15.webp"),
    title: "Our Network of Content and Media Partners is Rapidly Growing",
    excerpt:
      "Several more local online media as well a well-known international media have been added to our partnership network.",
    content: [
      "Several more local online media as well a well-known international media have been added to our partnership network.",
      "Entering its sixth year of existence, Arkadia Digital Media, especially through its flagship website Suara.com, continues to carry out various developments. One of them is the development of its media and content partners network.",
      "It has been known previously, within the last year Suara.com has been in cooperation with dozens of media, both in the form of simply content sharing partnership or including traffic sharing.",
      "In the last couple of months, Suara.com has been adding several more media to this network. These included new local media from several regions in Indonesia, as well as international media that developes its Indonesian version.",
      "Among the latest from Indonesia are Ayo Bandung media group, Jubi, and Zona Utara. Jubi, for example, is part of the Suara.com network which has made important contributions, especially in reports around Papua including during the recent riots. While Ayo Bandung and Zona Utara are no less interesting through a variety of unique contents, especially from around West Java and the North Sulawesi region.",
      "For international media, one of the latest is Deutsche Welle (DW), which actually has also been developing its Indonesian version. In addition to its general affair contents, DW is also especially well-known for topics around science and technology, which of course gives more variation to Suara.com's contents.",
      "This commitment of developing partnership network will continue to be one of Suara.com's focuses --and the other Arkadia portals-- with a vision to be able to further expand the dissemination of information that is beneficial to every level of society in various places.",
      "The concept and model of partnership itself is open to be developed at any time, depending on the needs and agreements of every party. And this is inline with the spirit of Arkadia Digital Media group to continue developing together with the other media within its network.",
    ],
  },

  {
    id: 14,
    category: "EVENT",
    date: "August 26, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-14.webp"),
    title:
      "Hundreds of Participants Enjoyed Arkadia's Situ Gunung Trail Run 2019",
    excerpt:
      "This time around, Arkadia Digital Media held an outdoor event, a trail run involving hundreds of participants in a green and beautiful environtment of Sukabumi, West Java.",
    content: [
      "This time around, Arkadia Digital Media held an outdoor event, a trail run involving hundreds of participants in a green and beautiful environtment of Sukabumi, West Java.",
      "Another big event was held by Arkadia Digital Media, this time was held in Sukabumi, West Java. The event that involved hundreds of competing participants was Situ Gunung Trail Run (SGTR) 2019, which was held on Sunday morning, 25 August.",
      "With the theme 'Run For Nation', this event is part of the celebration on Indonesian Independence Day that falls on August 17 each year. This outdoor race or trail run was deliberately chosen, because in addition to being unique or a rare event held by media companies, also because of its nature environment and even some conservation value with every participant involved in tree donations.",
      "Indeed, this Arkadia Event's race was welcomed enthusiastically by many people. Incuding by a number of ministers and public figures who have helped promote it since a few months before the actual event, and also by hundreds of participants who overflowed to participate in this event.",
      "The participants themselves were not just ordinary runners or people who participate while having recreation, but also many professional runners. And there were a number of foreign participants such as from the United States, Australia, Japan, France and other countries.",
      "Many participants then appreciated this activity, and hoped that the same event will be held again next year or even become an annual event. Muhsen, one of the participants who won in the 21K Men Open category, claimed to have prepared for a month specifically for SGTR 2019. He also hopes that this event can be held again next year.",
      "Similar expression mentioned by one foreign participant, Steve Patricio. Although he didn't win, he admitted that the event was very fun and pleasantful, and promised to come back if Situ Gunung Trail Run is to be held again next year.",
      "A positive reception was also expressed by Sukabumi Regent, Marwan Hamami. He and his government also hoped that this event could become an annual agenda in the Sukabumi Regency, collaborating with Arkadia Digital Media.",
      "'This is the first experience for Situ Gunung to have a trail run event. Hopefully this will become an annual routine or activity,' said Marwan, hoping that the event could help their tourism spot to go international.",
      "Editor in Chief of Suara.com who is also COO of PT Arkadia Digital Media Tbk, Suwarjono, also hoped that this event will be able to help develop tourism in Sukabumi Regency. And of course, he also thanked all parties who had helped support this event as well as all the participants.",
    ],
  },

  {
    id: 13,
    category: "AGM",
    date: "June 25, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-13.webp"),
    title: "Strong Plan from the DIGI's Annual General Meeting of Shareholders",
    excerpt:
      "Located at the Century Park Hotel, Senayan, Jakarta, on Monday, June 24, PT Arkadia Digital Media Tbk (DIGI) has held its Annual General Meeting of Shareholders (AGM).",
    content: [
      "Located at the Century Park Hotel, Senayan, Jakarta, on Monday, June 24, PT Arkadia Digital Media Tbk (DIGI) has held its Annual General Meeting of Shareholders (AGM). After the AGM, the Company ready to take an important step, which is to carry out Capital Additions without Pre-emptive Rights (PMTHMETD) with a maximum of 20,500,000 shares, or 6.31% of the issued and paid-up capital stated in the Company's articles of association as stipulated in OJK Regulation Number 32 / POJK.04 / 2015.",
      "Attended by the entire Board of Commissioners and Board of Directors of PT Arkadia Digital Media Tbk, the AGM was also attended by other shareholders. The plan for the Company's PMTHMETD itself is carried out in accordance with the provisions of the Company's articles of association, applicable laws and regulations, and does not conflict with the agreements previously carried out by the Company.",
      "This is done in the context of business activities, where the Company feels the need to strengthen the capital structure and increase the number of shares outstanding, thus indirectly increasing trade liquidity for the Company's shares.",
      "'This PMTHMETD can be carried out at once, or in stages within a period of two years as of the approval of this meeting (AGM),' the President Director of PT Arkadia Digital Media Tbk, Wiliam Martaputra said. Wiliam also said, for the implementation of PMTHMETD at this time, the Company did not plan to do so through a public offering.",
      "The proceeds from the PMTHMETD itself are projected to reach Rp. 31,775,000,000 from 20,500,000 shares assuming a price of Rp. 1,550 per share. As for the benefits of implementing PMTHMETD, the Company will receive additional funds that will strengthen the capital structure in the context of the Company's business development, and the number of outstanding shares will also increase which will increase the trading liquidity of the Company's shares.",
      "'The results of the PMTHMETD will then be used to increase working capital, develop the Company's business and or pay off the obligations of the Company,' Wiliam explained.",
      "'With the use of funds obtained from the implementation of PMTHMETD for the development of the Company's business, it is expected that it will have a positive impact on the Company which can lead to the increase of shareholder's values,' President Commissioner of PT Arkadia Digital Media Tbk, Stephen Sulistyo added.",
    ],
  },

  {
    id: 12,
    category: "CSR",
    date: "April 18, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-12.webp"),
    title: "A Joyful Sharing Moment with Foster Children in Tebet",
    excerpt:
      "For the second time following 2018, PT Arkadia Digital Media Tbk held a social event entitled 'Arkadia Berbagi'.",
    content: [
      "For the second time following 2018, PT Arkadia Digital Media Tbk held a social event entitled 'Arkadia Berbagi'. This time, the Arkadia Berbagi 2019 was held at the Tebet Orphanage, South Jakarta, Friday, April 26.",
      "No less than 44 orphans felt happiness from the activity that was deliberately designed form them. The program was also accompanied by several guest stars, including a comedian name Marcel, and two popular dangdut singers from Nagaswara namely Ratu Meta and Dinda Permata.",
      "Chief Editor of Suara.com, Suwarjono said that the Arkadia Berbagi 2019 was a part of the Company's corporate social responsibility (CSR) programs. This time, he said, the program was also part of the 5th anniversary of Suara.com that fell on March 11.",
      "'Our presence here is to get together and share with the children at the Tebet Orphanage. The family of PT Arkadia Digital Media Tbk wants to celebrate happiness with the children, not just through information from our websites but also by coming here to this lovely place so we can interact directly,' Suwarjono said in his remarks.",
      "Furthermore, Suwarjono expressed hope that the positive social activity could be well received. His hope was quickly answered by Maryamah, Chairwoman of the Future Youth Foundation who manage the Tebet Orphanage. Maryamah expressed her gratitude and appreciation for the Arkadia visit.",
      "'Alhamdulillah, today we can meet directly with Suara.com's editorial team. Thank you for greeting and gathering our children here to enjoy happiness together.' Maryamah said.",
    ],
  },

  {
    id: 11,
    category: "COLLABORATION",
    date: "April 18, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-11.webp"),
    title:
      "A Series of Joint Effort to Combat Election's Hoaxes through CekFakta Collaboration",
    excerpt:
      "The 2019 Presidential and General Election are accompanied by the phenomenon of increasingly widespread hoax or mis and disinformation content circulation.",
    content: [
      "The 2019 Presidential and General Election are accompanied by the phenomenon of increasingly widespread hoax or mis and disinformation content circulation. This has been a concern for many parties, including journalists and credible mass media.",
      "In relation to it, entering the political year of 2019, a number of online media, especially those incorporated in the CekFakta collaboration where Suara.com also participated, decided to counter questionable campaign claims together through a joint verification program.",
      "The move was carried out through a joint fact-checking work at each of the 2019 Presidential Election debate. The first debate itself had taken place on January 17, where several media including Suara.com also carried out live fact-cheking but still in their own newsrooms.",
      "But at the second Presidential Election debate on February 17, dozens of media agreed to do it together in a shared workroom as a command center. To no surprise, Google, which from the beginning supported combat efforts for mis or disinformation through Google News Initiative, provided their office in the SCBD area as the command center.",
      "And so, since the 2nd Presidential Debate in February, right through the next three debate (March 17, March 30 and April 13), Google Indonesia's office was packed with representatives from at least a dozen mass media. Also supported by a team from Mafindo, each program was also attended by several experts or reseachers from independent institutions that have knowledge to each of the debate themes.",
      "Suara.com is involved in each of these programs, continuously sending one representative to the command center every time the Presidential Election debate took place. Every agenda also assisted by other parties, such as a provider of live transcript program, as well as social media dan documentation teams. The programs evidently gained pretty good response from the public.",
      "Including when finally around the voting day on April 17, the fact-checkers again worked together at a big hall in the SCBD area for two consecutive days. This time, with a bit more complex working system, the team also got help from a number of journalism students, as well as some local media and journalists in several other cities in Indonesia.",
      "'I think this is history,' said Irene Jay Liu from Google, in an earlier part of the joint fact-checking program, expressing her enthusiasm and salute. Irene even said that similar fact-checking once carried out by some US media in the country's Presidential Election, did not even able to work together in one location, but rather just in each media's",
    ],
  },

  {
    id: 10,
    category: "LAUNCHING",
    date: "March 30, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-10.webp"),
    title:
      "5th Birthday, Suara.com Held a Political Talkshow and Launched 5 Regional News Portals",
    excerpt:
      "Following the 5th anniversary on March 11, Suara.com held a major event with a talk show entitled 'Politics Without Hoax', followed by a launching of five regional news portals.",
    content: [
      "Following the 5th anniversary on March 11, Suara.com held a major event. Held at one of the famous hotels in Jakarta, on Friday, March 29, 2019, the event contained a talk show entitled 'Politics Without Hoax', followed by a launching of five regional news portals. Speakers at the talk show were a number of well-known figures in their respective fields.",
      "They were Imam Wahyudi from the Press Council, Rustika Herlambang from Indonesia Indicator, Henri Subiakto from the Ministry of Communication and Information, Imam Gunawan from the Ministry of Youth and Sports, and two female politicians namely Tina Talisa from the Nasdem Party and Annisa Tyas Palupi from the Democrat Party.",
      "During the event which was attended by more than 100 invitees from the media, businesses, several academics and students, many speakers expressed serious concern about the widespread circulation of hoaxes in Indonesia. Even so, based on some experiences shared by them, there is optimism that the hoax wave can still be overcome, especially by maximizing the role of media, in addition to increasing literacy in the community.",
      "The next part of the afternoon event was the launch of five regional news portals under Suara.com, namely Suara Jabar, Suara Jateng, Suara Jatim, Suara Banten, and Suara Jogja. Designed as an effort to further expose important local news in each of the region, as well as to bring Suara.com closer to regional readers, the launch itself is an initial part of Suara.com's plan to expand its network throughout the archipelago.",
      "The launch of these five regional news portals was carried out directly by the Presidential Chief of Staff, Moeldoko, who pressed the button as a symbol of inauguration. Accompanying Moeldoko on stage were the leaders of PT Arkadia Digital Media Tbk, namely President Commissioner Stephen Sulistyo, Commissioner Iwa Karunia, CEO Wiliam Martaputra, and COO who is also the Chief Editor of Suara.com Suwarjono.",
      "In his keynote speech on the day's event, Moeldoko hoped that Suara.com could consistently maintain the credibility of its coverage. Moeldoko said he did not want Suara.com to emulate the workings of some other media which were merely aimed at raising ratings by distributing hoax and controversial articles for the sake of number of readers.",
      "'Consistency determines credibility. So, if you are not consistent with what is and has been going on so far, your credibility will decrease,' Moeldoko said in front of Suara.com leaders and invited guests.",
      "Meanwhile, Chief Editor of Suara.com Suwarjono explained, the launch of the 5 regional news portals was carried out after evaluating that Suara.com readers are consistenly increasing after 5 years of circulation. In addition to that, he said, the internet penetration that was previously focused in DKI Jakarta area has now begun to spread and become increasingly high in many areas of Java.",
      "'Today it turns out that West Java has the largest internet penetration. I think, whether we like it or not, we must get closer to the area, to be more specific (with the contents) to the readers,' Suwarjono said.",
    ],
  },

  {
    id: 9,
    category: "PARTNERSHIP",
    date: "February 12, 2019",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-9.webp"),
    title:
      "7 Arkadia Websites in Yogyakarta to Work Together with Gadjah Mada University",
    excerpt:
      "Representatives of the 7 websites of Arkadia Digital Media in Yogyakarta held an initial hearing and discussion with the Public Relations and Protocol Division of Gadjah Mada University.",
    content: [
      "Representatives of the 7 websites of Arkadia Digital Media in Yogyakarta held an initial hearing and discussion with the Public Relations and Protocol Division of Gadjah Mada University at UGM Central Building, Yogyakarta, on Friday, January 25, 2019.",
      "The visit that was led by the Bureau Head of Arkadia Digital Media in Yogyakarta, Rendy Sadikin, was taken in order to establish friendship and cooperation, as well as an official introduction to the Gadjah Mada University management.",
      "It was expected to be the start of a good relationship between PT Arkadia Digital Media Tbk and UGM. The arrival of the Arkadia Digital Media team at UGM Central Building was welcomed by the UGM Public Relations and Protocol Division Head, Iva Avriani. She was accompanied by two of her Sub-section Heads, Hestining Kurniastuti and Satria Ardhi Nugraha.",
      "In the meeting, Rendy Sadikin introduced a brief company profile and the seven websites owned by Arkadia Digital Media that have been operating in Yogyakarta.",
      "'In Yogyakarta, we have 7 websites, namely Matamata.com, Hitekno.com, Bolatimes.com, Dewiku.com, Mobimoto.com, Guideku.com and Himedik.com, which have been established since March 2018. Each online portal has different genre and reader segmentation,' Rendy Sadikin said.",
      "Iva said that the UGM ready to work with Arkadia Digital Media. According to her, there are a lot of potential that can be explored in the collaboration later. For instance, Iva said that there are so many publications in UGM, including results of seminars, researches, student achievements and so on. She also said that the UGM has been known to have many experts in various fields which can be contacted as credible sources for the Arkadia Digital Media websites.",
      "'We are happy and ready to work with Arkadia Digital Media. Hopefully this cooperation will work out fine, and benefit all parties and the society,' Iva said.",
    ],
  },

  {
    id: 8,
    category: "GATHERING",
    date: "November 26, 2018",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-8.webp"),
    title:
      "'Ngariung ka Bandung', a Happy Employee Gathering for the Arkadians",
    excerpt:
      "For two days full, on Friday and Saturday, November 23 to 24, around 200 employees of Arkadia Digital Media gathered together in an activity called 'Arkadia Ngariung ka Bandung'.",
    content: [
      "For two days full, on Friday and Saturday, November 23 to 24, around 200 employees of Arkadia Digital Media gathered together in an activity called 'Arkadia Ngariung ka Bandung'. For information, 'ngariung' is a Sundanese term meaning 'gathering'. This employee gathering activity was held in one of the tourism locations in Lembang, Bandung.",
      "More than 100 employees using two buses, while some managers and leaders used different vehicles, departing from Jalan Sisingamangaraja 21, Jakarta, since Friday morning.",
      "Many of them have been preparing and arrived since dawn, some even spent the previous night at the office. Meanwhile, dozens of other employees from 7 Arkadia websites that based in Yogyakarta, have departed since Thursday night using one bus to the location. And finally, on Friday afternoon, all employees and participants of the event had gathered at the beautiful and fresh event location in Lembang.",
      "Although the weather once was interspersed by heavy rain, this event proved to be a moment of intimacy and full of excitement and happines for all the employees. Starting from the session of introduction which was quite important because many have not known each other (especially between Jakarta and Yogyakarta employees), interesting outbound programs, lunch and dinner together, entertainment and free events, tourism location visit, were all followed by the participants enthusiastically and cheerfully.",
      "Interestingly, in one of the entertainment sessions in the evening, dangdut singer Ovi Sovianti, known as a former Duo Serigala member, joint and warmed the atmosphere with her performance singing a couple of songs. And not only Ovi, even her husband, Franky Ilham Roring, also had the chance to perform a song that night.",
      "'I have been like a family with PT Arkadia, because a number of times I have also came to Suara.com's office to do song promotions. It's really nice to be able to participate in this event,' Ovi Sovianti said that night.",
      "On the second day, after some free programs, including swimming, playing football or just gathering to sing together, the Arkadians --as the Arkadia employees been called-- then took part in the last activity which was visiting one of the tourism sites in Lembang area. Then after that, following lunch time, the group parted ways to go home: the Yogyakarta team departed with their bus, while the other employees are taken by two buses back to Jakarta.",
    ],
  },

  {
    id: 7,
    category: "LISTING",
    date: "September 18, 2018",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-7.webp"),
    title:
      "DIGI Officially Becomes the First Digital Media Company Listed on IDX",
    excerpt:
      "Using the stock symbol 'DIGI', starting from Tuesday morning, September 18, 2018, PT Arkadia Digital Media Tbk has been officially listed on the Indonesia Stock Exchange (IDX). It's something special, because it is the first digital media company ever been listed on the IDX.",
    content: [
      "Using the stock symbol 'DIGI', starting from Tuesday morning, September 18, 2018, PT Arkadia Digital Media Tbk has been officially listed on the Indonesia Stock Exchange (IDX). It's something special, because it is the first digital media company ever been listed on the IDX.",
      "All the Board of Directors of the company along with business partners and several staff attended the listing ceremony at the IDX Building Main Hall. The ceremony itself was also a special occasion, because the Presidential Chief of Staff, Moeldoko, also attended and shared his words with the audience.",
      "Following the ceremony, the DIGI share price itself has moved up from Rp 200 to Rp 340 (up 70%). This means that the DIGI initial listing has been positively welcomed.",
      "No less than 150 million of shares were offered to the public by PT Arkadia Digital Media Tbk in this initial listing. And it was reported that during the initial public offering (IPO) periode several days back, demand for the shares has been oversubscribed more than 100 times.",
      "The President Director of PT Arkadia Digital Media Tbk, Wiliam Martaputra, said they're really optimistic that the company's value will increase significantly in the near future. The company's up-to-date credible contents, its independency, the use of various platforms with wide distribution network, as well as other creative business models, are among the reasons of this optimism.",
      "'Limitless creativity with so many development plans currently in our company are the elements that make us optimistic. In terms of business, the future of this digital media is very promising,' Mr Martaputra said.",
      "As explained previously, the company plans to use the money from IPO for capital expenditure (capex) and its expansion plan. The plan includes upgrading infrastructure and hardwares, developing platforms and other softwares, as well as for working capital accross all their business units.",
      "The company has three subsidiary companies namely PT Arkadia Media Nusantara (AMN), PT Mata Media Nusantara (MMN), and PT Integra Archipelago Media (IAM), managing several online media and portals such as Suara.com, Matamata.com, Bolatimes.com, Hitekno.com, Dewiku.com, Mobimoto.com, Guideku.com, and Himedik.com. PT Arkadia Digital Media Tbk also manages a content provider business unit, multimedia production house, event planning unit, and several more.",
    ],
  },

  {
    id: 6,
    category: "PUBLIC EXPOSE",
    date: "August 7, 2018",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-6.webp"),
    title: "Public Expose, PT Arkadia Digital Media Ready to 'Go Public'",
    excerpt:
      "With core business in online media and multimedia contents, PT Arkadia Digital Media is ready to offer its stocks to the public in a planned Initial Public Offering (IPO).",
    content: [
      "With core business in online media and multimedia contents, PT Arkadia Digital Media is ready to offer its stocks to the public in a planned period of Initial Public Offering (IPO) between August 21 to 24, 2018. The actual listing in the Indonesia Stock Exchange (IDX) is planned to be held on August 29, 2018.",
      "The plan was unveiled in a public expose event at Hotel Century Park, Jakarta, on Monday, August 6, 2018. Speaking at the event, Wiliam Martaputra as the Chief Executive Officer (CEO) of PT Arkadia Digital Media explained that this is a big and strategic step of the company to expand its business.",
      "The public expose event were also attended by other key managements of PT Arkadia Digital Media, including President Commissioner Stephen Sulistyo, Commissioner Iwa Karunia, Independent Commissioner Ariyo Ali Suprapto, Director Suwarjono, and Independent Director Fastabiqul Khair Algatot. They were accompanied by Denny Saliman from PT Danatama Makmur Sekuritas as the underwriter.",
      "It was explained that through the IPO, PT Arkadia Digital Media is offering 54.55% of its shares, with no less than 150 millions of stocks will be offered. Offering their stocks in a price range from Rp 200 to Rp 400 per unit (lot), the company is expecting to gain fresh capital between Rp 20 billion to Rp 40 billion.",
      "The company plans to use the money for capital expenditure (capex) and their expansion plan. As Mr Martaputra explained, around 34% of the capital will be used to upgrade infrastructure and hardwares accross all their business units, 53% will be used for developing platforms and other softwares, while the other 13% is for working capital accross all their business units.",
      "Mr Martaputra also underlined that the company is optimistic about the rise of its value in the future, especially with their up-to-date credible contents, its independency, the use of various platforms with wide distribution network as well as other creative business models. In short, the company is believed to have a steady and significant growth in the future.",
      "'Limitless creativity with so many development plans currently in our company are the elements that make us optimistic, that in terms of business, the future of this digital media is very promising,' Mr Martaputra said.",
      "As a background, PT Arkadia Digital Media has three subsidiary companies which are PT Arkadia Media Nusantara (AMN), PT Mata Media Nusantara (MMN), and PT Integra Archipelago Media (IAM). The companies manage a well-known online media Suara.com; several new segmented portals such as Matamata.com, Bolatimes.com, Hitekno.com, Dewiku.com, Mobimoto.com, Guideku.com, and Himedik.com; a content provider business unit; a multimedia production unit as well as an event organizing unit; and several more in development.",
    ],
  },

  {
    id: 5,
    category: "REPORTING",
    date: "July 9, 2018",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-5.webp"),
    title:
      "IndonesiaLeaks, an Investigative Journalism Collaboration Involving Suara.com",
    excerpt:
      "Strengthening its journalists capabilities while also undertaking its main function to serve the public's right to know, Suara.com continues its involvement in the IndonesiaLeaks collaboration.",
    content: [
      "Strengthening its journalists capabilities while also undertaking its main function to serve the public's right to know, Suara.com continues its involvement in the IndonesiaLeaks collaboration. This is basically an investigative journalism initiative involving several media and non-government organizations (NGO) to try to uncover or report cases with data and sources supplied by member of the public anonimously.",
      "Has been involved in the program since the initiation several months ago, a couple of Suara.com editors and reporters have been joining trainings and meetings with the team. At the moment, there are a couple of cases they're working on, where they are fully supported by the office, community of the press, and hopefully by law enforcers and the public.",
      "As been explained on its website, the IndonesiaLeaks is an initiative to give space for public informant to share data to media. The information being shared has to have urgency and importance to the public. Equipped with an encryption technology, the IndonesiaLeaks platform assures the secrecy of every informant.",
      "Based on what being submitted through the IndonesiaLeaks platform, journalists in the program will then do their journalistic works, including to verify every early information. Thanks to the platform, journalists from different media will have an easier and managable way to collaborate and produce some high quality journalism reports.",
      "At this moment, besides Suara.com, some other media members of IndonesiaLeaks are JARING (Jaringan Indonesia untuk Jurnalisme Investigasi), Tempo, Bisnis Indonesia, Independen.id, CNN Indonesia, Liputan 6, The Jakarta Post, and KBR. They are accompanied and supported by several partners from NGO, including Auriga, LBH Pers, ICW, Greenpeace, and Change.org.",
      "While stronger sinergy in reporting is one thing, wider publication and expose is another important target of this collaboration. In the end, this initiative can hopefully strengthen the media function as watchdogs including to uncover corruptions and providing space for those who can't really have their voices heard.",
    ],
  },

  {
    id: 4,
    category: "TRAINING",
    date: "June 11, 2018",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-4.webp"),
    title:
      "Sharing Sessions about Anti-Hoax Tools with Arkadia Editorial Teams",
    excerpt:
      "During two precious moments in the end of May and early June, the Arkadia editorial teams in Yogyakarta and Jakarta respectively, got some special short training sessions.",
    content: [
      "During two precious moments especially because of the teams' daily tasks-- in the end of May and early June, the Arkadia editorial teams in Yogyakarta and Jakarta respectively, got some special short training sessions.",
      "It's about how to anticipate hoax or misinformation and disinformation, where some useful and well-known digital tools been shared. The sessions were conducted by a Suara.com's editor who have been one of certified trainers from this year's Google News Initiative program in collaboration with Internews and AJI.",
      "In Yogyakarta, almost all the editorial team of Arkadia joined the training with big enthusiasm, even though the two-halfday sessions were held when most of them were fasting. The important thing is that all of these young journalists and writers have the same perspective towards hoax, and that from this moment on they have some relatively new knowledge about it.",
      "Similar to their younger team in Yogyakarta, at PT Arkadia Digital Media office in Jakarta a couple of weeks later, the editorial team were also highly spirited about the training. And although some of them have already known few of the tools being shared (including from FirstDraft), the sessions have surely added more knowledge to them.",
      "Training sessions within a trainer's own media is highly encouraged by GNI and its collaborators, while there's also a list of trainings for journalists or other public members being held this year to spread the knowledge more nationwide. It is still a long battle against hoax or misinformation and disinformation, but steps are being taken and Arkadia is proud to be part of this.",
    ],
  },

  {
    id: 3,
    category: "COLLABORATION",
    date: "May 5, 2018",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-3.webp"),
    title:
      "Fighting Hoax, Suara.com Joins Other Media in 'CekFakta' Initiative",
    excerpt:
      "Around 22 online media and organisations, including Suara.com, along with Google, have collaborated in the launch of CekFakta.com to fight misinformation and disinformation in Indonesia.",
    content: [
      "Around 22 online media and organisations, including Suara.com, along with Google, have collaborated in the launch of CekFakta.com. This is a website that is aimed to fight the distribution of misinformation and disinformation in Indonesia.",
      "The launch of CekFakta.com was done in a big seminar and training called 'Trusted Media Summit 2018', held at the Gran Melia Hotel, Kuningan, Jakarta, on Saturday, May 5.",
      "This event was promoted and organized by people from the Google News Initiative program, in collaboration with Indonesian Cyber Media Association (AMSI), Indonesian Anti-hoax Community (Mafindo), and supported by Internews and the Alliance of Independent Journalists (AJI Indonesia).",
      "CekFakta.com itself is basically a portal that can be used to check many informations or topics distributed through the internet or other social media platform. They are listed and being verified by the media member of CekFakta, and are displayed in different results (statuses).",
      "'AMSI believe this CekFakta initiative can be a breakthrough to filter hoaxes or other misinformation, especially in crucial moment like now, when we are facing regional elections and heading into the Presidential Election next year,' said Chairman of AMSI, Wenseslaus Manggut.",
      "'This project is interesting, because for the very first time more than 20 mainstream online media in Indonesia are collaborating rather than competing with each other. In this context, we choose to set aside competition for a bigger cause,' said Wens.",
    ],
  },

  {
    id: 2,
    category: "OFFICE",
    date: "March 12, 2018",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-2.webp"),
    title:
      "Arkadia Digital Media Officially Operates Its 3 New Portals in Yogyakarta",
    excerpt:
      "The three new portals of PT Arkadia Digital Media, namely Matamata.com, Bolatimes,com and Hitekno.com, has been officially operating in Yogyakarta since Monday, April 2, at their new office.",
    content: [
      "The three new portals of PT Arkadia Digital Media, namely Matamata.com, Bolatimes.com and Hitekno.com, has been officially operating in Yogyakarta since Monday, April 2, at their new office.",
      "The official launch of the office was led by COO of PT Arkadia Digital Media, Suwarjono. In his opening words, Suwarjono said that this launching is part of the new spirit in media development outside of Jakarta.",
      "'So that not all media would focus on Jakarta anymore. Yogyakarta can be one of the choices for new media centers in this country, where news can be circulated and being produced,' said Suwarjono.",
      "Suwarjono explained that the three new portals are specifically targeting millenial generation of readers. While being new, he expected the three media can follow the success of their predecessor, Suara.com, in fulfilling the need of the readers.",
      "'These three media have actually been prepared long time ago, along with the development of Suara.com, and now they have come to live,' said Suwarjono.",
      "For information, Matamata.com is an information portal producing contents about entertainment and the world of showbiz. It has contents not only about local selebrities and other news, but also from the Hollywood, and even the Bollywood and K-pop.",
      "Bolatimes.com specializing in football news and information, written and published in interesting ways so that readers can get rich information from them. Not only providing running news, the website regularly publishes articles about the WAGs (wife and girlfriends of footballers), and other people or things around it.",
      "While in Hitekno.com, there are reviews of gadgets, as well as updated information about gaming, the internet, other technological things, and also science news.",
    ],
  },

  {
    id: 1,
    category: "LAUNCHING",
    date: "March 12, 2018",
    author: "Corporate Communications",
    image: getPressReleaseImage("press-release-1.webp"),
    title: "Launching of 3 New Portals at Suara.com's 4th Birthday",
    excerpt:
      "As of March 11 this year, Suara.com is officialy 4 years old. While celebrating, PT Arkadia Digital Media also launched three new portals: Matamata.com, Hitekno.com, and Bolatimes.com.",
    content: [
      "As of March 11 this year, Suara.com is officialy 4 years old. Interestingly, while having the 4th birthday celebration at its headquater in Jakarta, PT Arkadia Digital Media, the parent company, also launched three new portals in order to fulfill the need of their readers.",
      "The 3 new portals are Matamata.com which has all about entertainment contents, Hitekno.com that specializes on gadget and technology, and Bolatimes.com that specifically focuses on football. The launch of beta version for these 3 new portals was marked by pressing the 'ON' button, introducing the three websites to the shareholders, management and all staff.",
      "'This is also to mark the start of our expansion plan, along with bigger corpration steps to strengthen our company's capital structure. Soon we will also launch more content based and aggregator platform portals,' said CEO of PT Arkadia Digital Media, Wiliam Martaputra, on Monday, March 12.",
      "Mr. Martaputra said, the development of new media within this group is important as there's still big potential in the digital world in Indonesia. Moreover, the increasing numbers of internet users in Indonesia is so far not answered by the existence of enough good quality information websites. In fact, many information are still distributed mainly through social media which sometimes contains hoaxes.",
      "'This is not only a kind of threat, but also a challenge for us to produce quality contents that may become reliable sources for the public. In other words, we want to produce a lot of informative contents for the new and increasing online readers,' said Mr. Martaputra.",
      "COO of PT Arkadia Digital Media, Suwarjono, explained that these new portals are specifically targeted for millenial or gen Y-Z readers as the biggest market in digital world today. But they also wants to look for new market of the internet users.",
      "'Internet penetration is still raising. At the moment, only 53 percent of Indonesians are connected to internet. So there's still big market. We will be seriuosly concentrate to the growing of new readers, not only in big cities but all across Indonesia,' said Suwarjono.",
      "As for Suara.com, Suwarjono claimed that they have their own strategy to keep the news website exist and can always compete with older and bigger websites. 'We always able to change and adapt, and it's all because of the new readers that have different characters and uniqueness,' said Suwarjono.",
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
                      className="h-full w-full object-cover"
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
