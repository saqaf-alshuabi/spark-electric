import type {
  HomeServiceItem,
  ServiceDetail,
  ServiceDraft,
  ServiceSummary,
} from '../../types/site'

function withCover(draft: ServiceDraft): ServiceDetail {
  const cover = draft.gallery[0]

  if (!cover) {
    throw new Error(`Service "${draft.slug}" needs at least one gallery image`)
  }

  return {
    ...draft,
    image: cover.src,
    imageAlt: cover.alt,
  }
}

const serviceDrafts: ServiceDraft[] = [
  {
    slug: 'electrical-networks',
    icon: 'i-ph-lightning-duotone',
    title: 'تأسيس كهرباء',
    description: 'التمديد مع البناء، قبل الدهان',
    serviceType: 'تأسيس كهرباء',
    seoDescription: 'تأسيس كهرباء في مكة مع البناء وقبل اللياسة: تمديد مواسير، علب أفياش بالليزر، سحب أسلاك، وتوزيع أحمال على لوحة القواطع. للبيوت والمحلات.',
    intro: 'التأسيس يمشي مع البناء: نمدّد المواسير في السقف والجدران قبل اللياسة، ونركّب علب الأفياش والمفاتيح بالليزر عشان تطلع مستوية. بعدها نسحب الأسلاك ونوزّع الأحمال على لوحة القواطع، ونسلّمها لك جاهزة ومجرّبة قبل الدهان.',
    faqs: [
      {
        question: 'متى أبدأ التأسيس في البيت الجديد؟',
        answer: 'بعد ما يخلص العظم وقبل اللياسة. لو انتظرت للدهان بتضطر تكسر جدران، وهذا يكلّفك أكثر ويأخّرك.',
      },
      {
        question: 'تشتغلون بيوت ولا محلات؟',
        answer: 'الاثنين. بيوت، شقق، ملاحق، محلات، ومستودعات. نفس الشغل، يختلف بس حجم اللوحة وتوزيع الأحمال.',
      },
      {
        question: 'المواد عليكم ولا عليّ؟',
        answer: 'زي ما تحب. نجيبها لك، أو تشتريها بنفسك وإحنا نركّب. على كل حال نقولك المطلوب بالضبط قبل ما تشتري.',
      },
      {
        question: 'كم يأخذ التأسيس وقت؟',
        answer: 'يعتمد على المساحة وعدد النقاط. نجي نشوف الموقع، ونعطيك مدة وسعر قبل ما نبدأ.',
      },
    ],
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'لوحة قواطع بعد التأسيس',
      },
      {
        src: '/images/services/networks-ceiling-conduit.jpg',
        alt: 'مواسير التمديد في السقف',
      },
      {
        src: '/images/services/networks-laser-outlets.jpg',
        alt: 'علب أفياش على الطوب، مع ليزر التسوية',
      },
      {
        src: '/images/services/networks-corridor-conduits.jpg',
        alt: 'تمديد في ممر البيت',
      },
    ],
  },
  {
    slug: 'lighting',
    icon: 'i-ph-lightbulb-duotone',
    title: 'ثريا وسبوت',
    description: 'نركّبها ونوزع النور',
    serviceType: 'تركيب ثريات وإضاءة',
    seoDescription: 'تركيب ثريات وسبوت في مكة: تثبيت يتحمّل وزن الثريا، وتوزيع إضاءة يغطي الغرفة بدون ظلال ولا زوايا مظلمة. نركّب ثرياتك حتى لو السقف عالي.',
    intro: 'نركّب الثريا على تثبيت يتحمّل وزنها، ونوزّع السبوت على السقف بحيث النور يغطي الغرفة بدون ظلال ولا زوايا مظلمة. ولو الثريا كبيرة أو السقف عالي، نجهّز التعليق قبل ما نرفعها.',
    faqs: [
      {
        question: 'عندي ثريا اشتريتها، تركّبونها؟',
        answer: 'إيه. جهّز الثريا وإحنا نركّبها ونثبّتها صح، حتى لو السقف عالي.',
      },
      {
        question: 'كم سبوت يكفي الغرفة؟',
        answer: 'يعتمد على مساحة الغرفة وارتفاع السقف ولون الجدران. نشوف الغرفة ونقولك العدد والتوزيع.',
      },
      {
        question: 'أختار نور أصفر ولا أبيض؟',
        answer: 'الأصفر للمجالس وغرف النوم، والأبيض للمطبخ ودورات المياه. نقدر نخلط بينهم بحسب كل غرفة.',
      },
      {
        question: 'تركّبون ديمر للإضاءة؟',
        answer: 'إيه، بشرط اللمبات نفسها تكون قابلة للتخفيت. نقولك أي نوع تشتري قبل.',
      },
    ],
    gallery: [
      {
        src: '/images/services/lighting-crystal-chandelier.jpg',
        alt: 'ثريا كريستال في السقف',
      },
      {
        src: '/images/services/lighting-spot-grid.jpg',
        alt: 'سبوت موزّع على السقف',
      },
      {
        src: '/images/services/lighting-hanging-glass.jpg',
        alt: 'ثريا زجاج معلّقة من السقف',
      },
      {
        src: '/images/services/lighting-glass-cloud.jpg',
        alt: 'ثريا ذهبية بقطع زجاج',
      },
    ],
  },
  {
    slug: 'decorative-led',
    icon: 'i-ph-sparkle-duotone',
    title: 'ليد مخفي',
    description: 'النور باين، والشريط ما يبان',
    serviceType: 'تركيب ليد مخفي',
    seoDescription: 'تركيب ليد مخفي في مكة: مجرى مضبوط في الجبس أو خلف الكورنيش، نور متساوي، والشريط ما يبان. ليد ملوّن RGB وتحكّم من الجوال متوفر.',
    intro: 'الليد المخفي شغله إن النور يبين والشريط ما يبان. نجهّز المجرى في الجبس أو خلف الكورنيش، نمدّ الشريط بمسافة ثابتة عشان النور يطلع متساوي، ونخفي المحوّل في مكان يوصله هوا وتقدر توصله لو احتاج صيانة.',
    faqs: [
      {
        question: 'الشريط يبان من تحت؟',
        answer: 'لا، إذا المجرى صحيح والعمق مضبوط. اللي يخلّيه يبين هو الجبس المسوّى غلط، وهذا اللي نتفاداه من البداية.',
      },
      {
        question: 'كم يعيش شريط الليد؟',
        answer: 'يعتمد على جودة الشريط والمحوّل والتهوية. الشريط الرخيص مع محوّل ضعيف يصفرّ ويطفّي بدري.',
      },
      {
        question: 'ممكن ليد يغيّر ألوان؟',
        answer: 'إيه، RGB أو RGBW مع ريموت أو تحكّم من الجوال. نقولك الفرق قبل ما تشتري.',
      },
      {
        question: 'تنسّقون مع مقاول الجبس؟',
        answer: 'إيه، وهذا الأفضل. لو نسّقنا مع الجبّاس من البداية يطلع المجرى مظبوط من أول مرة.',
      },
    ],
    gallery: [
      {
        src: '/images/services/led-geometric-ceiling.jpg',
        alt: 'سقف بليد هندسي مخفي',
      },
      {
        src: '/images/services/led-ceiling-frame.jpg',
        alt: 'ليد مستطيل في السقف وقت التركيب',
      },
      {
        src: '/images/services/led-tiered-ceiling.jpg',
        alt: 'ليد مخفي في سقف طبقات',
      },
      {
        src: '/images/services/led-kitchen-cabinets.jpg',
        alt: 'ليد تحت خزائن المطبخ',
      },
    ],
  },
  {
    slug: 'intercom',
    icon: 'i-ph-security-camera-duotone',
    title: 'انتركوم',
    description: 'تشوف مين عند الباب، من جوا',
    serviceType: 'تركيب انتركوم',
    seoDescription: 'تركيب انتركوم في مكة: فيديو انتركوم بشاشة داخلية، تفتح الباب من مكانك، وأنظمة لعمارة كاملة. ونفحص الانتركوم القديم قبل ما تبدّله.',
    intro: 'نركّب وحدة الباب الخارجية والشاشة الداخلية، ونمدّ بينهم كيبل مناسب عشان الصوت والصورة يوصلوا نظيفين. نضبط فتح الباب من الشاشة، ونجرّبه معك قبل ما نمشي.',
    faqs: [
      {
        question: 'فيه انتركوم بصورة؟',
        answer: 'إيه، فيديو انتركوم. تشوف اللي عند الباب على الشاشة وتفتح له من مكانك.',
      },
      {
        question: 'يشتغل مع أكثر من شقة؟',
        answer: 'إيه، فيه أنظمة لعمارة كاملة: كل شقة لها شاشة، ووحدة الباب واحدة للجميع.',
      },
      {
        question: 'يوصل على الجوال؟',
        answer: 'فيه أنواع تدعم الواي فاي وترد منها على الجوال حتى لو أنت برا البيت. نقولك أي موديل يسوّيها.',
      },
      {
        question: 'عندي انتركوم قديم خربان',
        answer: 'نفحصه أول. أحياناً المشكلة في الكيبل أو المحوّل، مو في الجهاز كامل، والإصلاح أرخص من التبديل.',
      },
    ],
    gallery: [
      {
        src: '/images/services/intercom-outdoor-panel.jpg',
        alt: 'وحدة انتركوم على جدار الباب',
      },
      {
        src: '/images/services/intercom-indoor-panel.jpg',
        alt: 'شاشة انتركوم داخل البيت',
      },
      {
        src: '/images/services/intercom-button-panel.jpg',
        alt: 'وحدة انتركوم بأزرار على الجدار',
      },
    ],
  },
  {
    slug: 'air-conditioning',
    icon: 'i-ph-snowflake-duotone',
    title: 'تأسيس تكييف',
    description: 'النحاس والدكت مع البناء',
    serviceType: 'تأسيس تمديدات تكييف',
    seoDescription: 'تأسيس تكييف في مكة مع البناء: نحاس معزول، تصريف بميلان صحيح عشان ما ينقّط، ونقطة كهرباء جاهزة. سبلت وكونسيلد، بدون مواسير مكشوفة.',
    intro: 'التأسيس يعني النحاس والتصريف والكهرباء تمشي داخل الجدار مع البناء، قبل اللياسة. نعزل النحاس، ونميّل ماسورة التصريف عشان الماء ينزل لحاله، ونجهّز نقطة الكهرباء ومكان الوحدة الخارجية.',
    faqs: [
      {
        question: 'ليه أأسس من وقت البناء؟',
        answer: 'عشان ما تبين ولا ماسورة على الجدار. لو أسست بعدين بتمشي المواسير مكشوفة، أو تكسر لياسة جديدة.',
      },
      {
        question: 'سبلت ولا كونسيلد؟',
        answer: 'الاثنين. الكونسيلد يبغى دكت وسقف جبس ومساحة أكبر، ونقولك إذا سقفك يسمح ولا لأ.',
      },
      {
        question: 'تصريف الماء يطلع وين؟',
        answer: 'نوجّهه لأقرب تصريف مناسب بميلان ثابت. الميلان الغلط هو سبب أغلب تنقيط المكيفات.',
      },
      {
        question: 'تركّبون المكيف نفسه؟',
        answer: 'شغلنا الأساس هو التأسيس. لو التأسيس جاهز نقدر نكمّل التركيب، كلّمنا وقول لنا وضع الموقع.',
      },
    ],
    gallery: [
      {
        src: '/images/services/ac-outdoor-rough-in.jpg',
        alt: 'مواسير المكيف خارجة من الجدار',
      },
      {
        src: '/images/services/ac-copper-lines.jpg',
        alt: 'مواسير المكيف داخل جدار الطوب',
      },
      {
        src: '/images/services/ac-wall-piping.jpg',
        alt: 'مواسير المكيف في الجدار',
      },
      {
        src: '/images/services/ac-ceiling-pipes.jpg',
        alt: 'مواسير المكيف في السقف والجدار',
      },
    ],
  },
  {
    slug: 'fault-diagnosis',
    icon: 'i-ph-wrench-duotone',
    title: 'أعطال',
    description: 'نفحص ونقولك السبب والسعر، بعدين نصلح',
    serviceType: 'كشف وإصلاح أعطال كهربائية',
    seoDescription: 'كشف أعطال الكهرباء في مكة على مدار الساعة: قاطع يفصل، قصر، أو وصلة محروقة. نفحص، نقولك السبب والسعر، وبعد موافقتك نصلح.',
    intro: 'نبدأ بالفحص: نتتبّع الخط من القاطع لين النقطة اللي فيها المشكلة، ونحدد السبب بالضبط — قصر، حِمل زايد، وصلة محروقة، أو قاطع تعبان. نقولك السبب والسعر، وبعد موافقتك نصلح.',
    faqs: [
      {
        question: 'القاطع يفصل كل شوي، وش السبب؟',
        answer: 'غالباً حِمل زايد على الخط أو قصر في نقطة معيّنة. لا تعيد رفعه كثير — الفحص يحدد المكان بدل التخمين.',
      },
      {
        question: 'تجون بسرعة لو صار عطل؟',
        answer: 'نشتغل على مدار الساعة داخل مكة وضواحيها. كلّمنا واتساب وأرسل موقعك، ونقولك متى نوصل.',
      },
      {
        question: 'تحاسبون على الفحص؟',
        answer: 'نقولك رسوم الكشف قبل ما نجي، وما فيه أي شغل بدون ما توافق على السعر.',
      },
      {
        question: 'فيه ريحة حريق من الفيش، وش أسوي؟',
        answer: 'أطفئ القاطع الرئيسي على طول ولا تستخدم الفيش، وكلّمنا. هذي علامة وصلة محروقة وممكن تكبر.',
      },
    ],
    gallery: [
      {
        src: '/images/services/fault-wall-outlets.jpg',
        alt: 'أفياش مكشوفة في الجدار',
      },
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'فحص لوحة الكهرباء',
      },
    ],
  },
]

export const services: ServiceDetail[] = serviceDrafts.map(withCover)

export const serviceSummaries: ServiceSummary[] = services.map(
  ({ slug, icon, title, description, image, imageAlt }) => ({
    slug,
    icon,
    title,
    description,
    image,
    imageAlt,
  }),
)

export const homeServices: HomeServiceItem[] = services.map(({ icon, title, description, slug }) => ({
  icon,
  title,
  description,
  to: `/services/${slug}`,
}))

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find(service => service.slug === slug)
}
