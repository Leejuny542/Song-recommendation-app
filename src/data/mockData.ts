import { Track, CuratedTheme } from '../types/music';

export const APP_LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmYQcaQ8ha8Bp9ONMvito5dLlb-Lnwh70B9w4tZi4BJLvPqiomyxCyV1w2X2v4ilvkSCL9L2J1IqJmxIYCk9f71AQmXqfP6CwyHoSTp8pLFRB0Z6Fbm_-cHAROQ4PL75NaxF5D-dwT3oTHys88tpPwXVTRjxeT2FTej_AIIP71Jdn_vxKEdH52neLyQHiZYBoroy0bycft4KBN-6a6ajXYph0Qpd3mmH86xAQRgIKY2gKL3F6_ktyT';
export const USER_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdGsPlc7F4IQeiCpK5ieTBpp6doCq7kn6gjkd_AR6p6ENLpyQoSLRCGvIePzNXIzffOXfMUnt88nqGJUMO9g390Ut379qfjWOpkO09z83wIYKmU0V5I4y-8fXooVG-ZcJzKT8-oAIkmBfSf21qLyDS08xVNmMjJdg1tlDedms_zoGS-hu99sqbFD7izd_AQO5gUp9vTVjFJqFteQ48tbz1Hgil2Heq36JtqPgQcmb9IP6hhHLjdiUG';

// Real Iconic Songs for Home AI Recommendations
export const INITIAL_HOME_RECOMMENDATIONS: Track[] = [
  {
    id: 'real-home-1',
    title: '비도 오고 그래서 (Feat. 신용재)',
    artist: '헤이즈 (Heize)',
    album: "/// (너 구름 비)",
    year: 2017,
    duration: '3:25',
    durationSec: 205,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyIUy6qT-k0BCYBQPd0WoFRwlcNGUKaGLIoV5gojLWXzcAnU0V2V9bYzs3w6je1Dbq-fUM98INE2oYYXBRD10TITP5ovk0nB4CshaMJgc2RFSBopQH14Cfsthfi_fUqesynYi53zzHy1GV1is1vDaxrGrQxQ8agAfutP8XF3kP2-IuTbWlcWygNvyd_ixtNnwH4iTK8mgctJBZwtctPReT0nUuCmjXWKoLWA6VNHaJHY4JVu9pmck_',
    genre: 'R&B • Rain Soul',
    matchScore: 99.4,
    aiReason: '감미로운 피아노 선율과 빗소리 텍스처, 신용재와 헤이즈의 하모니가 비 오는 날의 아련한 감성을 극대화합니다.',
    isLiked: false,
    youtubeQuery: '헤이즈 비도 오고 그래서 공식 뮤직비디오',
    youtubeVideoId: 'afxLaBLFs-8',
    bpm: '78'
  },
  {
    id: 'real-home-2',
    title: '비 오는 날 듣기 좋은 노래 (Feat. Colde)',
    artist: '에픽하이 (EPIK HIGH)',
    album: 'Epik High Is Here 下',
    year: 2021,
    duration: '3:50',
    durationSec: 230,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_X6UrCmczQi6KNWprcg6_2ZtVV1dfeXtfibsKvbnOyCTMnhmsI6MziwL_cwFL7mbMG4IM5dorgxSdj9tyZepKjbNLpfhQP3OrISaGMV3rOss6pbhmHSiIXl_g7lqXfLALwTGW23qpz8litI1dsn6dDy0EB1_yfahgacwm0Etx2aHu0MLKaaglwTaWgcIDQKAeB-Eg9pzqRvBPD_Nr1jXa1W2DTSpa8-H5EfZkUGDYO8qgIwRzXFja',
    genre: 'Hip-Hop • Chill R&B',
    matchScore: 98.7,
    aiReason: '콜드의 나른하고 감각적인 보컬과 타블로의 차분한 랩이 창가에 앉아 커피를 마실 때 더없는 몰입감을 줍니다.',
    isLiked: true,
    savedDate: '2024.10.28 저장됨',
    youtubeQuery: '에픽하이 비 오는 날 듣기 좋은 노래 Colde',
    youtubeVideoId: '8k452S_mJbU',
    bpm: '82'
  },
  {
    id: 'real-home-3',
    title: '밤편지 (Through the Night)',
    artist: '아이유 (IU)',
    album: "Palette",
    year: 2017,
    duration: '4:13',
    durationSec: 253,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5SefMkq87mWicFiJX6m8ULz1xr-ChDvzW4WnBt_outjAzt8VegPZDiT4szrOyTQDj3SYo_HLHXYKHFfsF-xaRSUW-cqeZc_w-6IBJv98t-_NQRVsjSjYBAp9pomX_eOwlgCoRfjOZPgKQ6_c-M8jXhUdLMK-NiX5L6fdo7LDQil8kRhB1MnCC6UgXgk_bzceMEJwnHoD44UCMrdrJxCLk6jw5lRk96ysBSKKtT9DqpqHIa6CMx5Ch',
    genre: 'Folk Ballad • Acoustic',
    matchScore: 99.8,
    aiReason: '어쿠스틱 기타와 서정적인 멜로디, 아이유 특유의 온기 어린 음색이 지친 하루를 따스하게 위로해 줍니다.',
    isLiked: true,
    savedDate: '2024.10.27 저장됨',
    youtubeQuery: '아이유 밤편지 공식 뮤직비디오 Through the night',
    youtubeVideoId: 'BzYnNdJhZQw',
    bpm: '72'
  },
  {
    id: 'real-home-4',
    title: '주저하는 연인들을 위해 (For Lovers Who Hesitate)',
    artist: '잔나비 (JANNABI)',
    album: '전설 (Legend)',
    year: 2019,
    duration: '4:25',
    durationSec: 265,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU9xzakeeR2DwE-fufMQDIlmkc-FTznqlylcN_HKv4YK-FwRjl6610o9g21zDR1E3TsnR9LaWcLIvOCETp7kUanYWWKXYehRIh-hvB5avsmTJGgboQ83sK0ZbtLVbzAPUfBAuP0-BQRtlFkSlx8KEG7qf6qiUl4JxnM2-XazO2NLrqjLPkLXHVy4XQvCV6gfSH2VdCNq45AwJ94JaFrhMbmPPavMrrW6eM2LoTLgko-sw4a119e8Ly',
    genre: 'Indie Rock • Vintage Pop',
    matchScore: 97.9,
    aiReason: '빈티지 아날로그 질감과 낭만적인 현악 편곡이 카페 공간과 서정적인 사색의 순간에 완벽히 녹아듭니다.',
    isLiked: false,
    youtubeQuery: '잔나비 주저하는 연인들을 위해 공식 뮤직비디오',
    youtubeVideoId: 'wLmI08n3_wA',
    bpm: '76'
  }
];

// Initial Real Songs in My Library
export const INITIAL_LIBRARY_TRACKS: Track[] = [
  {
    id: 'real-lib-1',
    title: '밤편지 (Through the Night)',
    artist: '아이유 (IU)',
    duration: '4:13',
    durationSec: 253,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-rJwLmNIGNgI_2BJ_QDKqpVXxd_xdxEhQ6NbCawkykSVPgi_QohhSbarfmHJ4WzItdabG4HNVFlZsK--w6Xb4eD-TA2mPZ1XJIAh_jsSfpbx6n0d9sEDU97IPD6V0KPbMcYyMZ_DE8fkMJQzsAQC46KIjkP5JsllZQ9hPoyv0mUg9jSEkq-NLfmsFJXMYd_D3PWJLoOLhB0t9p1IHj6YoB1_AKp82wOCVdc9Y4qkUEvDd_ITlkCUY',
    savedDate: '2024.10.28 저장됨',
    isLiked: true,
    matchScore: 99.8,
    youtubeQuery: '아이유 밤편지 공식 뮤직비디오',
    youtubeVideoId: 'BzYnNdJhZQw'
  },
  {
    id: 'real-lib-2',
    title: '비도 오고 그래서 (Feat. 신용재)',
    artist: '헤이즈 (Heize)',
    duration: '3:25',
    durationSec: 205,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOyd9pQlDs9cmqeaHydGHAMHf3b4siQQbBvAr_9sz51YEErpaZDX8G3EDX2iLzzxz6ul7cIWneZoG0n_v2OV00q2gnhlFrdZ1IrtauS31pH64NfUAvoICzYm1T1znFxGzOZEGV5M9Pe1qTKMqHqKuDqRM2XppFliUpWJmbgRpp8jFb62tCNhMI4JI9dy2HUg6foTcOBe4KZBTE_Ql_bL2QsGNrRdY8uwkx5n-w9hPkc42knrW0v9my',
    savedDate: '2024.10.27 저장됨',
    isLiked: true,
    matchScore: 99.4,
    youtubeQuery: '헤이즈 비도 오고 그래서 공식 뮤직비디오',
    youtubeVideoId: 'afxLaBLFs-8'
  },
  {
    id: 'real-lib-3',
    title: '주저하는 연인들을 위해',
    artist: '잔나비 (JANNABI)',
    duration: '4:25',
    durationSec: 265,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx1xYJ84NfoOi3-TUh2FR7XOu_rXna2U1w0nyN0uYO-RdCt_sD42sF9_PcxDWKwnWVo75kN2JxYYhPTNjVjjctbBtaIohqUaO2Jtm0z25K6evDluTYqsLNWH-H2iFvmhBw_VAbbXOa4yo-jc5u6cVFu6CpUwktHhMbuQAmEGNOLANMDAGyp2e-JhtRHfdnTlTK8YUUemGOuEpL7gZSKJtq1V6o9yVwQg0EM1iVacIHpGDjPBuxJk1b',
    savedDate: '2024.10.25 저장됨',
    isLiked: true,
    matchScore: 97.9,
    youtubeQuery: '잔나비 주저하는 연인들을 위해',
    youtubeVideoId: 'wLmI08n3_wA'
  }
];

// Real Curated Thematic Collections in AI Daily Curation
export const CURATED_DAILY_THEMES: CuratedTheme[] = [
  {
    id: 'theme-1',
    title: '퇴근길 피로를 씻어주는 R&B & 로파이',
    badge: '퇴근 스트레스 -42%',
    trackCount: 8,
    duration: '26분',
    matchRate: '매칭 98.7%',
    description: '헤이즈, 크러쉬, 백예린의 감각적인 보컬과 저음역 베이스라인이 하루 피로를 덜어줍니다.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtEwBA8lSmxGL2442TLyVzrESb8KmuBWskmFvF6TSuDQuDq07-pBiQSpd64Q9M8e2BiPMwbd6m8zRb0mWR3XcpKlSVjtBLbFnDO1zcmrHmJsbktbHlnuFdoRVJwBJAmKiTN-nQvvLqZzTLbuQOllsY4jKAqPq6Ft5PMfyDvNZ2AOcHzj4b5UPAP_zLRVSdsIhzlLFq5NSyB1noa2lpphFw7BOAuJlqbhP4HaI2_aNQGuwzM_x8TVN5',
    youtubeQuery: '퇴근길 감성 R&B 플레이리스트 헤이즈 백예린',
    youtubeVideoId: 'afxLaBLFs-8'
  },
  {
    id: 'theme-2',
    title: '카페 창가에서 읽는 책 한 권과 어쿠스틱',
    badge: '몰입 집중도 +38%',
    trackCount: 10,
    duration: '34분',
    matchRate: '매칭 99.1%',
    description: '10CM, 폴킴, 잔나비의 어쿠스틱 기타와 브러시 드럼이 선사하는 지적인 평온함.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD48W61vsD1itOKR3IByQLM0GjZAaM3ojBPplc5tYZxgIdlmT6hL5N2u6adlH024AiEY8b_yV3p1Q5zf9WpQmBW_c_Vk_sJzS60gMN95n8xCnGZEJQwv_NvBFLLVU1_VTlL7SuZ1J6SFLjndJey1UTdPc2dXdxxf_3ZyIXI3TcICW7UVZIbW-bcE1GZUzie1XJQn_pkW62bpqSenY7TFbKamt9DQEeb85LqTfRwdjzMlM0rRdjarXqt',
    youtubeQuery: '카페 어쿠스틱 음악 폴킴 10CM 잔나비',
    youtubeVideoId: '1kz6hNDlEEg'
  },
  {
    id: 'theme-3',
    title: '복잡한 생각을 비우는 서정 발라드',
    badge: '마음정돈 심박 동기화',
    trackCount: 6,
    duration: '40분',
    matchRate: '매칭 97.9%',
    description: '아이유, 성시경, 정승환의 깊은 울림을 주는 가사와 서정적인 피아노 멜로디.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPrBj4LnxeV07YUJPb5gSVBJPtbHkbbP4ummALjJ1hPvwOxH4N5buEbbEO533GpwKpr7TBssFh1YFkImamU91Z9nfm_8hDGI9w8GqOm2m4-Ckmo35sEEYwHRrTnQ7_6A1owBdK7VbOEP0h-ZvnUBpJFtqEE1PAPj_3oJHN52ktDbf378xvAmAU7EiINluoLmLOzURQ7WMFloqAYJ-X9d_bDdiEHpXmsnsJLQkXnhorHFEwocIBq22w',
    youtubeQuery: '아이유 성시경 감성 발라드 모음',
    youtubeVideoId: 'BzYnNdJhZQw'
  },
  {
    id: 'theme-4',
    title: '기분 좋은 산책을 위한 인디 팝 & 록',
    badge: '일상 활력 +45%',
    trackCount: 9,
    duration: '30분',
    matchRate: '매칭 98.4%',
    description: '데이식스, 악뮤, 뉴진스의 청량한 멜로디와 경쾌한 핑거링으로 채운 산책 리스트.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW3dEozmN2tG0gBxEH8giGV_Jpuzu-IrY8gJU79NbtYYJF2VYY7-TKOnTinFRFtRGQLWVmJs93g5vSyBE4shzbMTk0KJRx7yvFQneV0-enI2Uk6AE5r7sIs2qz5teYD4-tGa2KPyNl-9PWnWrj9-yQzVZ99e7Q5Pz4YTTmWKIlNTNaDhC2abFVGN115QEFCLsREY_YsLARZTBYyW-TtJTuY4MoTInN3slWfVGEQSuS0ikIMZF68NQZ',
    youtubeQuery: '데이식스 악뮤 산책 플레이리스트',
    youtubeVideoId: 'foYmRj_P02Y'
  }
];

// Real Master Playlist Tracks for AI Daily Curation
export const MASTER_PLAYLIST_TRACKS: Track[] = [
  {
    id: 'master-1',
    chartRank: 1,
    title: '한 페이지가 될 수 있게',
    artist: 'DAY6 (데이식스)',
    album: 'The Book of Us : Gravity',
    year: 2019,
    duration: '3:25',
    durationSec: 205,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmvOBbaUZPO7FzJKgmAxaGThgf1Sxl2TX-YbgJdm_moKNMiKq-qo7SQgaC8u7n2oy1j3ONEft8fhT9o_1PLKFykm1VWMkvW84RiYib8lPGx5P_i_X0A2mwdmLbmHhNtj_rYLgCgF3WGfKuZILCx46CsrkM5gJJ-Bj62ZOLsziaeTKkj752bRh3Q-IUn8TlgaITFxDW-7Ls2xvUiukaiyiJBoeCYeodBLULN4xWeGQ3DPR6FdlsWoTf',
    matchScore: 99.4,
    aiReason: '벅차오르는 밴드 사운드와 청춘의 에너지가 오후의 무기력함을 시원하게 날려줍니다.',
    isLiked: false,
    youtubeQuery: '데이식스 한 페이지가 될 수 있게 공식 뮤직비디오',
    youtubeVideoId: 'foYmRj_P02Y'
  },
  {
    id: 'master-2',
    chartRank: 2,
    title: 'Square (2017)',
    artist: '백예린 (Yerin Baek)',
    album: 'Every letter I sent you.',
    year: 2019,
    duration: '4:21',
    durationSec: 261,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBm430E4Mfd8VnEPcA5YQ3CG8ftjm28k32Yt2R3iZH6n6s7ZgiypOi_T_phLyV0N-sAgNKVt_iipLetIH3Zt5gGD5b0IpgUQCa-GHPomH10KlylaCiFR8FIorKSzgl8NIiC51BLLO9tf7MUHyz954XOuvwKoaNAYQwzOwbl0CFiiLG-gxAtwYD0MgaJ_gFd2AtN8nxAvCjSMHfBzr5DyR5H_E5tp0DX3xG2GyQqGcsEUXdZnbva9BL',
    matchScore: 98.9,
    aiReason: '맑은 햇살 아래 푸른 들판을 연상시키는 백예린 특유의 독보적인 음색과 산뜻한 그루브.',
    isLiked: false,
    youtubeQuery: '백예린 Square 공식 라이브 영상',
    youtubeVideoId: 'R81b1E1tC8w'
  },
  {
    id: 'master-3',
    chartRank: 3,
    title: '모든 날, 모든 순간 (Every day, Every Moment)',
    artist: '폴킴 (Paul Kim)',
    album: "키스 먼저 할까요? OST",
    year: 2018,
    duration: '3:30',
    durationSec: 210,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3nsZn5ry53fF9pgZNmJISvLXL8FJAllbVkTuQ5L4ctN4ujCKUNYzr-y9KNKp2Thl-XxSOamT-Xs1HydTfjDZFwjp32_waaouI1VMbaErazg0T5oh0izwJByWFWF4uwin8YjdX2Yegptna1Dc0xnzDxXDQcjihkKiaiTU4xyKYyEW-httedMogvP1w4LEnHcaKzQbgNSkbjIHxmFKGJDZvVgGundWkS55bZvydH0BrVXFTRgjrbPLj',
    matchScore: 98.5,
    aiReason: '감미로운 피아노 연주와 따뜻한 보컬이 일상에 평온함과 안도감을 전합니다.',
    isLiked: false,
    youtubeQuery: '폴킴 모든 날 모든 순간 공식 뮤직비디오',
    youtubeVideoId: '1kz6hNDlEEg'
  },
  {
    id: 'master-4',
    chartRank: 4,
    title: '그라데이션 (Gradation)',
    artist: '10CM',
    album: '5.3',
    year: 2022,
    duration: '3:22',
    durationSec: 202,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQeK74ikSfwMfDua8yWJw0x9NOS50vo1wnHnTdSuYGvmYdELOhGCFW1lq-bi67CXTMKxcaPBkF_ohUlSAxrVZxH1CHTpYqD3LFDKyfoj2_x2-xm4K_2IB2cpIQWMmUtsN02PXKdoRVP2jtBgmQJfH3SEDlHBu9j722oDZgcHi2Io3e9ostRnv9y1D35fNqpe7DJHPkLsIuxRAFkMmvUJxcRtzGcEjeDsMdspdX8a8mXmBOdKCCoDBz',
    matchScore: 97.8,
    aiReason: '청량하고 산뜻한 어쿠스틱 기타와 특유의 감미로운 음색이 기분 전환을 돕습니다.',
    isLiked: false,
    youtubeQuery: '10CM 그라데이션 공식 뮤직비디오',
    youtubeVideoId: 'g8aZ1fK-F50'
  },
  {
    id: 'master-5',
    chartRank: 5,
    title: 'Love Lee',
    artist: 'AKMU (악뮤)',
    album: 'Love Lee',
    year: 2023,
    duration: '2:59',
    durationSec: 179,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRunEKn4e5nt0-DOWz0ZBs9HVbbd9-EnIONDnazT2Qex6ZK4-EC7zA-G0ZNz3EJMolkJgUiTCse14IV7Pwb-5Z2c5FPbX3Yebi-xI-Pgunxwyr_xTbzERa2NgyLSeQAgnMczUAeT6XPdDagigt2J0-I9hrx1L0fVY4Pj2LNPtUaBMBeKnMO5nDl4sucH2m_2NVCb3M_KHN072nBQwEnVTXd5Vai8Hp3kNYzEE8QGSsHBb9_R1K1OVB',
    matchScore: 97.3,
    aiReason: '통통 튀는 경쾌한 드럼 비트와 남매의 사랑스러운 보컬 조화가 오후의 활력을 불어넣습니다.',
    isLiked: false,
    youtubeQuery: '악뮤 Love Lee 공식 뮤직비디오',
    youtubeVideoId: 'EIz09kLzN9k'
  },
  {
    id: 'master-6',
    chartRank: 6,
    title: 'Paris in the Rain',
    artist: 'Lauv',
    album: "I met you when I was 18.",
    year: 2017,
    duration: '3:25',
    durationSec: 205,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiX6zSzTupzuJz7_PDf4XuzeY4aiqel8pU-G4JEWuSL5K3xgdlivZST41Ucmyf-0ywtbqTfsZj50ieiD96pL2UrzCUfJMqswp2KmsoZ9db5lfUE22N1zZB4Q1GNgYpfUN8U6wLTT72lRIvFsL60N88S4ivmvqrQ5S2yCdG00uBYuSpmotLRjb1EaK3TWWXDQeWH70i8nIpmwzid8-bbnywZK4vLxzsUHYT2wBRuVdIVfT__b4qE0UL',
    matchScore: 96.8,
    aiReason: '재지한 일렉트릭 피아노 코드와 칠한 비트가 낭만적인 도시의 오후를 완성합니다.',
    isLiked: false,
    youtubeQuery: 'Lauv Paris in the Rain 공식 뮤직비디오',
    youtubeVideoId: 'kOCkne-Bku4'
  },
  // Additional real tracks for "더보기"
  {
    id: 'master-7',
    chartRank: 7,
    title: '신호등',
    artist: '이무진',
    album: '신호등',
    year: 2021,
    duration: '3:51',
    durationSec: 231,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB76YtUtRh574DTd0bqDfsXfkqtqMDTmX1DG62_O0l4lGzPLiq_5AJ3NBKY3BbbPldZ0QJ2CrlGTY8sdLQQUCd45qZ6ruLiPluuXVeNCV8lNIVrJMMKc48junDGZxXb6ow_ZFhOcGAjAYKelMBV-y_JaQ6vFCRD--3QNMaxxm2ESx5h-lEUKLnLCChAtrKuhN4dMxuPdHdi9kwYh_NAHnBW9RMBxSTQgzCkDu1d2nsKfJQF1qMGoEn6',
    matchScore: 96.2,
    aiReason: '사회초년생의 고민을 신호등에 빗댄 재치 있는 가사와 경쾌한 핑거스타일 기타.',
    isLiked: false,
    youtubeQuery: '이무진 신호등 공식 뮤직비디오',
    youtubeVideoId: 'SK6Sm2Ki9tI'
  },
  {
    id: 'master-8',
    chartRank: 8,
    title: '어떻게 이별까지 사랑하겠어, 널 사랑하는 거지',
    artist: 'AKMU (악뮤)',
    album: '항해 (SAILING)',
    year: 2019,
    duration: '4:50',
    durationSec: 290,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc1gktvCR90z-WJn0FeP2aPiT5UufCQ0kW2mvRZcUbqixjKeO-nYIuJNXiGjBsRvbqpyOPWHeIMCMjD1AQtG4uuzpkH23qNjsTPuLeEY1qxjCgeOv3TW3JBjNrTciRySQacdIZrHw2itwHA4P1SvaTqc07GWTPLPplrnX1WrEUWYRfwklfy_nJid_UgVKjp_Wsq1S_zDTQEu0-BrnZ67381bRVBov43zNeEbCAy-p2xKxh_og3tF5A',
    matchScore: 95.7,
    aiReason: '이수현의 청아한 보컬과 이찬혁의 가사 철학이 가슴 깊은 곳의 여운을 이끌어냅니다.',
    isLiked: false,
    youtubeQuery: '악뮤 어떻게 이별까지 사랑하겠어 공식 뮤직비디오',
    youtubeVideoId: 'mAKsZ26SabQ'
  },
  {
    id: 'master-9',
    chartRank: 9,
    title: '너의 모든 순간',
    artist: '성시경',
    album: '별에서 온 그대 OST',
    year: 2014,
    duration: '4:02',
    durationSec: 242,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW3dEozmN2tG0gBxEH8giGV_Jpuzu-IrY8gJU79NbtYYJF2VYY7-TKOnTinFRFtRGQLWVmJs93g5vSyBE4shzbMTk0KJRx7yvFQneV0-enI2Uk6AE5r7sIs2qz5teYD4-tGa2KPyNl-9PWnWrj9-yQzVZ99e7Q5Pz4YTTmWKIlNTNaDhC2abFVGN115QEFCLsREY_YsLARZTBYyW-TtJTuY4MoTInN3slWfVGEQSuS0ikIMZF68NQZ',
    matchScore: 95.1,
    aiReason: '따뜻한 어쿠스틱 피아노와 성시경의 부드러운 목소리가 마음에 깊은 안식을 선물합니다.',
    isLiked: false,
    youtubeQuery: '성시경 너의 모든 순간 공식 뮤직비디오',
    youtubeVideoId: 'G3z_b0vF_m8'
  },
  {
    id: 'master-10',
    chartRank: 10,
    title: 'Leave the Door Open',
    artist: 'Bruno Mars, Anderson .Paak, Silk Sonic',
    album: 'An Evening with Silk Sonic',
    year: 2021,
    duration: '4:02',
    durationSec: 242,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtEwBA8lSmxGL2442TLyVzrESb8KmuBWskmFvF6TSuDQuDq07-pBiQSpd64Q9M8e2BiPMwbd6m8zRb0mWR3XcpKlSVjtBLbFnDO1zcmrHmJsbktbHlnuFdoRVJwBJAmKiTN-nQvvLqZzTLbuQOllsY4jKAqPq6Ft5PMfyDvNZ2AOcHzj4b5UPAP_zLRVSdsIhzlLFq5NSyB1noa2lpphFw7BOAuJlqbhP4HaI2_aNQGuwzM_x8TVN5',
    matchScore: 94.6,
    aiReason: '70년대 빈티지 소울 사운드를 완벽히 재현한 명곡으로 그루비한 몰입감을 자랑합니다.',
    isLiked: false,
    youtubeQuery: 'Silk Sonic Leave the Door Open 공식 뮤직비디오',
    youtubeVideoId: 'adLGH4FaZE8'
  },
  {
    id: 'master-11',
    chartRank: 11,
    title: 'TOMBOY',
    artist: '혁오 (HYUKOH)',
    album: '23',
    year: 2017,
    duration: '4:01',
    durationSec: 241,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSDgPeMpjxkNiTwXswbg3anB_qk0sOfQgIi-jCOT9oStnh1LrZhF3Rfhbx6sK-caa8MeUxdPTEIkg3PtqR-1RlFh3m8rVZoZXAf6VS5hrK54se1RK-pbIo59U9QQDMbdRWOss8xog_khn3iR3pIcxtr2EbLKsVvogEhNxCsESJ7aAyXReQJfHXus9a339vkfaDO6MAOy8O-zVPtWUXqOly6shEcJq-47KzzjQFCcH71ppqTr8ITMCq',
    matchScore: 94.2,
    aiReason: '청춘의 불안과 사랑을 담은 서정적인 기타 리프와 오혁의 독보적인 허스키 보이스.',
    isLiked: false,
    youtubeQuery: '혁오 TOMBOY 공식 뮤직비디오',
    youtubeVideoId: 'pC6tPEaAi3g'
  },
  {
    id: 'master-12',
    chartRank: 12,
    title: 'Sunflower',
    artist: 'Post Malone & Swae Lee',
    album: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    duration: '2:38',
    durationSec: 158,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgzvsxp0_jVakU_bqV90OYSglSn7Vc8K0JMmoav4PiM1ZU6FCJcJr3-C3X0nP309Rhar_F5gm82HVD3lbScwf5cOCzvtbX_tBeoVcM7hI_q5dcxZ74C4OZuvkrr8oEQm9eVEqRry1qK5zqX8pfSgfnbNl7DNawmcnKjvKIJqjzM9SS8xvjVxzeRCEEIMxbULbuq3y7JPvAGyq4udFKC9B-lhu46-mX5YE2ZQNW2-GCStKlkYW_n_J1',
    matchScore: 93.8,
    aiReason: '통통 튀는 드럼 비트와 멜로디컬한 훅으로 세계적인 사랑을 받은 청량 힙합 트랙.',
    isLiked: false,
    youtubeQuery: 'Post Malone Swae Lee Sunflower 공식 뮤직비디오',
    youtubeVideoId: 'ApXoWvfEYVU'
  }
];

// Real Trending Charts Podium TOP 3
export const CHART_PODIUM_TRACKS: Track[] = [
  {
    id: 'podium-2',
    chartRank: 2,
    rankChange: 'up',
    rankDiff: 1,
    title: '한 페이지가 될 수 있게',
    artist: 'DAY6 (데이식스)',
    album: 'The Book of Us : Gravity',
    year: 2019,
    duration: '3:25',
    durationSec: 205,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9elWmumhiMH8cMdLY0yClm0rdFtnglJzWi8HJATuhJIZKmxpSAcfDApAWagzRAXOSX7G2eGXhk5dJQ0CCa421iG--QV1ZGgpahaOLg7HmEQ5ScSmLMI1PMk48S1X0Kubg21cjQsWOU2ZKu9vaF5A4fHEYRJlDSyI6MWqSv4fIXD4g-cskHsHUFL3zAheykrrAGuGR7FGmqvakskEBucP63BNllhHoAFIm8_IhnFijLryfC58ybRMy',
    matchScore: 98.6,
    tags: ['#청춘에너지', '#벅차오름'],
    sentimentText: 'AI 공감도: 청춘의 열정 & 희망',
    isLiked: false,
    youtubeQuery: '데이식스 한 페이지가 될 수 있게 공식 뮤직비디오',
    youtubeVideoId: 'foYmRj_P02Y'
  },
  {
    id: 'podium-1',
    chartRank: 1,
    rankChange: 'same',
    rankDiff: '-',
    title: 'Ditto',
    artist: 'NewJeans (뉴진스)',
    album: "NewJeans 'OMG'",
    year: 2022,
    duration: '3:05',
    durationSec: 185,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfxymVFgjXXdz3XGhxZuUZIVnqtpwNOLxfASxlv9cFzQg0JF5ilI7P8o24cyvTPDICRqld4FE6ITyhT6PgoL4mbpG4tZ3h_m1-LarnR4cqnJvtHoNLW4qGRuPZS8oIvm9XU7oGxGPbE2zJcHV1LngJYXtnymvqRn0Gu8GeETyj8sWsuLfmYvs56PSaRkE4mLNGhl-KvLAtMPT717d9O13Gl7Otyro1SljjCylPiiwbFpAb6pCsN2DA',
    matchScore: 99.7,
    tags: ['#실시간1위', '#아련한겨울감성', '#Y2K'],
    sentimentText: '실시간 공감: 아련한 그리움 & 온기',
    listenersCount: '동시 청취 84,219명',
    reactionsCount: '리액션 +38.4k',
    isLiked: false,
    youtubeQuery: '뉴진스 디토 Ditto 공식 뮤직비디오 side A',
    youtubeVideoId: 'pSUydWEqKwE'
  },
  {
    id: 'podium-3',
    chartRank: 3,
    rankChange: 'new',
    rankDiff: 'NEW',
    title: '밤편지 (Through the Night)',
    artist: '아이유 (IU)',
    album: 'Palette',
    year: 2017,
    duration: '4:13',
    durationSec: 253,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjVzy4iBADTr0SjkdHGuwcR7SKRu0zCOsMezZHXAifQZVZkpC1ZpAnec2PzNGo-ItklJBTbANCBL87YF9m4ROQcpquiZ5ciIGcDwGJNxNH6Lv6J8iGTlApqZ4LmLUZaez-3LVisA78I2b12DBvWDPn4hyyWGhduzWK3LcEltLjNG-JD4uCjxi2pti_lJr88KN4HmdyMF4EGnyjUa_DKB4TviUKVHxhRW_Ei6R1ewPvB4O2LoNHggfo',
    matchScore: 97.8,
    tags: ['#새벽위로', '#포크발라드'],
    sentimentText: 'AI 공감도: 잔잔한 심신 안정',
    isLiked: false,
    youtubeQuery: '아이유 밤편지 공식 뮤직비디오 Through the night',
    youtubeVideoId: 'BzYnNdJhZQw'
  }
];

// Real Trending Charts Rows 4 to 15
export const CHART_ROWS_TRACKS: Track[] = [
  {
    id: 'chart-4',
    chartRank: 4,
    rankChange: 'up',
    rankDiff: 2,
    title: 'Love Lee',
    artist: 'AKMU (악뮤)',
    album: 'Love Lee',
    duration: '2:59',
    durationSec: 179,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABof6J4MYOohETNBPxSPJr3D_En3djwEORCJ93xRy-2GwVjDYFqR7GUSdavSVG4YzxtzGJWbvLsQT_dDyXsF53746bmv9fNWCedW7O676txpLqDnt0bDw7xcxjsmrFpLgIQ1-QlbpGG6zHKE83TrKAQZJ1Du0OtFzSNX5aoU3pacMiZEgWG9CPr040Rabk9_JC7S6LCaFhhGDlMYAfDSrDq_eRjsYiGiGvb3Fjb7S0oGBSqTRKhS2O',
    matchScore: 95.8,
    sentimentBreakdown: {
      primaryLabel: '유쾌함',
      primaryPct: 82,
      secondaryLabel: '설렘',
      secondaryPct: 18
    },
    isLiked: false,
    youtubeQuery: '악뮤 Love Lee 공식 뮤직비디오',
    youtubeVideoId: 'EIz09kLzN9k'
  },
  {
    id: 'chart-5',
    chartRank: 5,
    rankChange: 'same',
    rankDiff: '-',
    title: '비도 오고 그래서 (Feat. 신용재)',
    artist: '헤이즈 (Heize)',
    album: '///',
    duration: '3:25',
    durationSec: 205,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC72uIpxp-Ca6WaMmdnoIKnhujntgJWFbwR0Klmxv1LcV2mx_xDDVw0-dJ_R2KVfzAxgpYeYUSLnN1ACzfAILe6vBURcM6WxCC3ksxsGRz3FDqljsCheP6KRjtYQwUTdgg59hbX5fgPjk2nq21_Flw1U5mMMHdI2p-6XTks6y_63KYQbk1XNHaRhroQ8WeFtfcjc5Kw_vcoBnbN1iTK-r3nsD8Y0mkl-o8cIdZnf5mSHWFFo2k6CaE',
    matchScore: 94.9,
    sentimentBreakdown: {
      primaryLabel: '비오는감성',
      primaryPct: 88,
      secondaryLabel: '그리움',
      secondaryPct: 12
    },
    isLiked: false,
    youtubeQuery: '헤이즈 비도 오고 그래서 공식 뮤직비디오',
    youtubeVideoId: 'afxLaBLFs-8'
  },
  {
    id: 'chart-6',
    chartRank: 6,
    rankChange: 'new',
    rankDiff: 'NEW',
    title: 'Square (2017)',
    artist: '백예린 (Yerin Baek)',
    album: 'Every letter I sent you.',
    duration: '4:21',
    durationSec: 261,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3XOOjBo1BrmBqHmQERPpDyrdIGarVTxt1BNhDBI2ytUjsvxeNor6sMuJXoluP1XiFW6lJhY--lvqGmQfNYc15BXscFz_oxK4sdTjwjcCrIb5qG6YrExLTHoFdeYc5iOGUNiqT0m2BoPPKZ28ct4bHhgDAOo5KAVdBbPmogLcbDrWWYL2oLpDNZZeyMirbsS9R5msAvnnoZ7ks8Gb-diY37Isiu3dcgoX10igqjNB3TkYua3n9ftza',
    matchScore: 93.6,
    sentimentBreakdown: {
      primaryLabel: '청량함',
      primaryPct: 79,
      secondaryLabel: '여유',
      secondaryPct: 21
    },
    isLiked: false,
    youtubeQuery: '백예린 Square 라이브 공식',
    youtubeVideoId: 'R81b1E1tC8w'
  },
  {
    id: 'chart-7',
    chartRank: 7,
    rankChange: 'down',
    rankDiff: 1,
    title: '주저하는 연인들을 위해',
    artist: '잔나비 (JANNABI)',
    album: '전설',
    duration: '4:25',
    durationSec: 265,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc1gktvCR90z-WJn0FeP2aPiT5UufCQ0kW2mvRZcUbqixjKeO-nYIuJNXiGjBsRvbqpyOPWHeIMCMjD1AQtG4uuzpkH23qNjsTPuLeEY1qxjCgeOv3TW3JBjNrTciRySQacdIZrHw2itwHA4P1SvaTqc07GWTPLPplrnX1WrEUWYRfwklfy_nJid_UgVKjp_Wsq1S_zDTQEu0-BrnZ67381bRVBov43zNeEbCAy-p2xKxh_og3tF5A',
    matchScore: 92.4,
    sentimentBreakdown: {
      primaryLabel: '빈티지낭만',
      primaryPct: 75,
      secondaryLabel: '위로',
      secondaryPct: 25
    },
    isLiked: false,
    youtubeQuery: '잔나비 주저하는 연인들을 위해',
    youtubeVideoId: 'wLmI08n3_wA'
  },
  {
    id: 'chart-8',
    chartRank: 8,
    rankChange: 'up',
    rankDiff: 3,
    title: '모든 날, 모든 순간',
    artist: '폴킴 (Paul Kim)',
    album: '키스 먼저 할까요? OST',
    duration: '3:30',
    durationSec: 210,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA3yWJJEIPgKyoVnidbwIxeNUIzkJwfujc8ZPi1tbXIPDxVgzHmmwAf-hWetn9M8jvibuKSUrz4f7KhkanAAZ9LmwTyVB0bJF8APK0PLPR3NAUKyFLDs7eXG3NmK7E-O3Jnn5Uq9W5rKmPtMnnxmtCrpKsqvE2-PFUDw7DFVFrYlWcXPJgZZnjAfiLVjB6qQhQ7dDyczrARAX27cX_BM4PCkw0ilUReAO3L-ghGna8LZG79EFCv5QN',
    matchScore: 91.8,
    sentimentBreakdown: {
      primaryLabel: '따스함',
      primaryPct: 83,
      secondaryLabel: '감동',
      secondaryPct: 17
    },
    isLiked: false,
    youtubeQuery: '폴킴 모든 날 모든 순간',
    youtubeVideoId: '1kz6hNDlEEg'
  },
  {
    id: 'chart-9',
    chartRank: 9,
    rankChange: 'down',
    rankDiff: 2,
    title: 'Hype Boy',
    artist: 'NewJeans (뉴진스)',
    album: "New Jeans",
    duration: '2:59',
    durationSec: 179,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACV_pOcCabh154s2-FWzJ0vW5Cix1o-PSn1upLp8RM88lQ2X53zZCM0Ui3dRTO8FyWdG16S4hKmxhz1p2QAkntbsiyqXixRWQEqgd7QrcjJbc402qXd3aIT6YLDzVsoQh_C-F7gpwH1xwlUccTnzTt2dWNPp4PrfVs_4mslCG3EzObTq8hqo-qSUqWUZYzBy6Q6V3feMRIRJJZqOIiy6L2xBberNjWzsaa1yW2QyEZX2zpNnqVwLnC',
    matchScore: 90.7,
    sentimentBreakdown: {
      primaryLabel: '에너지',
      primaryPct: 86,
      secondaryLabel: '신남',
      secondaryPct: 14
    },
    isLiked: false,
    youtubeQuery: '뉴진스 하입보이 Hype Boy 공식 뮤직비디오',
    youtubeVideoId: '11cta61Wi0g'
  },
  {
    id: 'chart-10',
    chartRank: 10,
    rankChange: 'up',
    rankDiff: 1,
    title: '그라데이션',
    artist: '10CM',
    album: '5.3',
    duration: '3:22',
    durationSec: 202,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuhgc1K4rV5z2s7Mgh4kQvwtAvP0IY72Rp1EdcwiUZR6EN0BzwlnGUQX01jAJySkR1lZ3FcWClp1lQVInPik2JjuN8LJIQKbEUFMiI_j2o-btu1cmhvdGJShTkTUdjJeX6-BfbW0CsL_j9WWs023U3RVPgN4s4HUX40d06I3qWEemPyRruY9POh-E_coeglFf4XULQaOBGR7Nr1Haq80geO_dUnaj4AgXYjncx6OphDJX03vuaWVHc',
    matchScore: 89.5,
    sentimentBreakdown: {
      primaryLabel: '청량어쿠스틱',
      primaryPct: 74,
      secondaryLabel: '산뜻함',
      secondaryPct: 26
    },
    isLiked: false,
    youtubeQuery: '10CM 그라데이션 공식 뮤직비디오',
    youtubeVideoId: 'g8aZ1fK-F50'
  },
  {
    id: 'chart-11',
    chartRank: 11,
    rankChange: 'same',
    rankDiff: '-',
    title: '비 오는 날 듣기 좋은 노래',
    artist: '에픽하이 (EPIK HIGH)',
    album: 'Epik High Is Here 下',
    duration: '3:50',
    durationSec: 230,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiX6zSzTupzuJz7_PDf4XuzeY4aiqel8pU-G4JEWuSL5K3xgdlivZST41Ucmyf-0ywtbqTfsZj50ieiD96pL2UrzCUfJMqswp2KmsoZ9db5lfUE22N1zZB4Q1GNgYpfUN8U6wLTT72lRIvFsL60N88S4ivmvqrQ5S2yCdG00uBYuSpmotLRjb1EaK3TWWXDQeWH70i8nIpmwzid8-bbnywZK4vLxzsUHYT2wBRuVdIVfT__b4qE0UL',
    matchScore: 88.2,
    sentimentBreakdown: {
      primaryLabel: '칠한힙합',
      primaryPct: 70,
      secondaryLabel: '편안함',
      secondaryPct: 30
    },
    isLiked: false,
    youtubeQuery: '에픽하이 비 오는 날 듣기 좋은 노래 Colde',
    youtubeVideoId: '8k452S_mJbU'
  },
  {
    id: 'chart-12',
    chartRank: 12,
    rankChange: 'up',
    rankDiff: 2,
    title: 'Paris in the Rain',
    artist: 'Lauv',
    album: "I met you when I was 18.",
    duration: '3:25',
    durationSec: 205,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBERubO5TwqmbsRbRBNCVyFIX2alyD4hjX0bzQdm3ZJ2khLb5npEy4qs3wxyR-TX3D_yrPCNyNqqG6abUqB2O1_Gc-0ktRtTE-txZnI8px-jUM4r5BDbQpidTGqv7KxNv4Nu-obSQZxG82FiJYhSrnJ5FnM31IXqIjok706hnPS93ooPxaNiSM4ISqP5H_ghpXcNeOQGAZWhWT0HaqYPsKtCwX-AKVmCacfmRL7nuDbq5sP1RmTXRoJ',
    matchScore: 87.5,
    sentimentBreakdown: {
      primaryLabel: '낭만팝',
      primaryPct: 80,
      secondaryLabel: '로파이',
      secondaryPct: 20
    },
    isLiked: false,
    youtubeQuery: 'Lauv Paris in the Rain',
    youtubeVideoId: 'kOCkne-Bku4'
  },
  {
    id: 'chart-13',
    chartRank: 13,
    rankChange: 'down',
    rankDiff: 1,
    title: 'Sunflower',
    artist: 'Post Malone & Swae Lee',
    album: 'Spider-Man Soundtrack',
    duration: '2:38',
    durationSec: 158,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQeK74ikSfwMfDua8yWJw0x9NOS50vo1wnHnTdSuYGvmYdELOhGCFW1lq-bi67CXTMKxcaPBkF_ohUlSAxrVZxH1CHTpYqD3LFDKyfoj2_x2-xm4K_2IB2cpIQWMmUtsN02PXKdoRVP2jtBgmQJfH3SEDlHBu9j722oDZgcHi2Io3e9ostRnv9y1D35fNqpe7DJHPkLsIuxRAFkMmvUJxcRtzGcEjeDsMdspdX8a8mXmBOdKCCoDBz',
    matchScore: 86.8,
    sentimentBreakdown: {
      primaryLabel: '도파민',
      primaryPct: 82,
      secondaryLabel: '리프레시',
      secondaryPct: 18
    },
    isLiked: false,
    youtubeQuery: 'Post Malone Sunflower 공식 뮤직비디오',
    youtubeVideoId: 'ApXoWvfEYVU'
  },
  {
    id: 'chart-14',
    chartRank: 14,
    rankChange: 'up',
    rankDiff: 1,
    title: 'Leave the Door Open',
    artist: 'Silk Sonic',
    album: 'An Evening with Silk Sonic',
    duration: '4:02',
    durationSec: 242,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPrBj4LnxeV07YUJPb5gSVBJPtbHkbbP4ummALjJ1hPvwOxH4N5buEbbEO533GpwKpr7TBssFh1YFkImamU91Z9nfm_8hDGI9w8GqOm2m4-Ckmo35sEEYwHRrTnQ7_6A1owBdK7VbOEP0h-ZvnUBpJFtqEE1PAPj_3oJHN52ktDbf378xvAmAU7EiINluoLmLOzURQ7WMFloqAYJ-X9d_bDdiEHpXmsnsJLQkXnhorHFEwocIBq22w',
    matchScore: 85.9,
    sentimentBreakdown: {
      primaryLabel: '그루브소울',
      primaryPct: 78,
      secondaryLabel: '감성',
      secondaryPct: 22
    },
    isLiked: false,
    youtubeQuery: 'Silk Sonic Leave the Door Open',
    youtubeVideoId: 'adLGH4FaZE8'
  },
  {
    id: 'chart-15',
    chartRank: 15,
    rankChange: 'same',
    rankDiff: '-',
    title: '신호등',
    artist: '이무진',
    album: '신호등',
    duration: '3:51',
    durationSec: 231,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD48W61vsD1itOKR3IByQLM0GjZAaM3ojBPplc5tYZxgIdlmT6hL5N2u6adlH024AiEY8b_yV3p1Q5zf9WpQmBW_c_Vk_sJzS60gMN95n8xCnGZEJQwv_NvBFLLVU1_VTlL7SuZ1J6SFLjndJey1UTdPc2dXdxxf_3ZyIXI3TcICW7UVZIbW-bcE1GZUzie1XJQn_pkW62bpqSenY7TFbKamt9DQEeb85LqTfRwdjzMlM0rRdjarXqt',
    matchScore: 84.7,
    sentimentBreakdown: {
      primaryLabel: '공감',
      primaryPct: 75,
      secondaryLabel: '희망',
      secondaryPct: 25
    },
    isLiked: false,
    youtubeQuery: '이무진 신호등 공식 뮤직비디오',
    youtubeVideoId: 'SK6Sm2Ki9tI'
  }
];

// Presets for dynamic search prompt updates (ALL REAL SONGS)
export const SEARCH_KEYWORD_PRESETS: Record<string, { query: string; tracks: Track[] }> = {
  '#비오는날감성': {
    query: '비 오는 날 창가에서 조용히 마시는 따뜻한 커피 한 잔에 어울리는 잔잔한 노래들',
    tracks: INITIAL_HOME_RECOMMENDATIONS
  },
  '#늦은밤새벽집중': {
    query: '새벽 2시, 몰입해서 글쓰기나 작업할 때 듣는 차분한 실제 명곡들',
    tracks: [
      INITIAL_HOME_RECOMMENDATIONS[2], // 밤편지 - 아이유
      MASTER_PLAYLIST_TRACKS[5],       // Paris in the Rain - Lauv
      MASTER_PLAYLIST_TRACKS[8],       // 너의 모든 순간 - 성시경
      INITIAL_HOME_RECOMMENDATIONS[1]  // 비 오는 날 듣기 좋은 노래 - 에픽하이
    ]
  },
  '#퇴근길드라이브': {
    query: '하루를 마치고 한강변 도로를 달리며 기분 전환하기 좋은 시티팝 & 밴드 곡',
    tracks: [
      MASTER_PLAYLIST_TRACKS[1],       // Square (2017) - 백예린
      MASTER_PLAYLIST_TRACKS[0],       // 한 페이지가 될 수 있게 - DAY6
      MASTER_PLAYLIST_TRACKS[9],       // Leave the Door Open - Silk Sonic
      CHART_PODIUM_TRACKS[1]           // Ditto - NewJeans
    ]
  },
  '#신나는운동플레이리스트': {
    query: '러닝과 트레이닝에 심박수를 끌어올려줄 에너제틱 실제 K-POP & POP',
    tracks: [
      MASTER_PLAYLIST_TRACKS[0],       // 한 페이지가 될 수 있게 - DAY6
      CHART_ROWS_TRACKS[5],            // Hype Boy - NewJeans
      MASTER_PLAYLIST_TRACKS[11],      // Sunflower - Post Malone
      MASTER_PLAYLIST_TRACKS[4]        // Love Lee - AKMU
    ]
  },
  '#카페에서일할때': {
    query: '따뜻한 라떼 한 잔과 집중 업무를 위한 잔잔한 어쿠스틱 & 인디 명곡',
    tracks: [
      MASTER_PLAYLIST_TRACKS[3],       // 그라데이션 - 10CM
      MASTER_PLAYLIST_TRACKS[2],       // 모든 날, 모든 순간 - 폴킴
      INITIAL_HOME_RECOMMENDATIONS[3], // 주저하는 연인들을 위해 - 잔나비
      MASTER_PLAYLIST_TRACKS[5]        // Paris in the Rain - Lauv
    ]
  },
  '#마음이편안해지는인디': {
    query: '마음의 짐을 덜어주는 서정적이고 맑은 어쿠스틱 인디 팝 & 포크 멜로디',
    tracks: [
      INITIAL_HOME_RECOMMENDATIONS[2], // 밤편지 - 아이유
      INITIAL_HOME_RECOMMENDATIONS[3], // 주저하는 연인들을 위해 - 잔나비
      MASTER_PLAYLIST_TRACKS[1],       // Square - 백예린
      MASTER_PLAYLIST_TRACKS[3]        // 그라데이션 - 10CM
    ]
  },
  '#지친하루위로곡': {
    query: '오늘 하루도 수고 많았어요. 가슴 깊이 스며드는 따뜻한 위로의 명곡',
    tracks: [
      INITIAL_HOME_RECOMMENDATIONS[2], // 밤편지 - 아이유
      MASTER_PLAYLIST_TRACKS[7],       // 어떻게 이별까지 사랑하겠어 - AKMU
      MASTER_PLAYLIST_TRACKS[2],       // 모든 날 모든 순간 - 폴킴
      MASTER_PLAYLIST_TRACKS[8]        // 너의 모든 순간 - 성시경
    ]
  }
};
