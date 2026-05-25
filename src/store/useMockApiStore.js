import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const now = new Date();

function isoDaysFromNow(days, hour = 9) {
  const date = new Date(now);
  date.setDate(date.getDate() + days);
  date.setHours(hour, 0, 0, 0);
  return date.toISOString();
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeInput(input) {
  if (input instanceof FormData) {
    return Object.fromEntries(input.entries());
  }

  return { ...(input || {}) };
}

function normalizeBoolean(value, fallback = false) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    return value === "true" || value === "on";
  }

  return fallback;
}

function normalizeNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizePrice(value, fallback = 0) {
  const parsed = normalizeNumber(value, fallback);
  return parsed < 0 ? fallback : parsed;
}

const defaultImages = {
  banner: "/training.png",
  training: "/training.png",
  workshop: "/workshop.png",
  webinar: "/training.png",
};

const initialData = {
  categories: [
    { id: "cat-1", name: "Cyber Security" },
    { id: "cat-2", name: "Web Development" },
    { id: "cat-3", name: "Data Science" },
    { id: "cat-4", name: "Cloud Computing" },
  ],
  subCategories: [
    { id: "sub-1", name: "SOC Analyst" },
    { id: "sub-2", name: "Frontend" },
    { id: "sub-3", name: "Machine Learning" },
    { id: "sub-4", name: "DevOps" },
  ],
  accounts: [
    {
      id: "acc-admin-1",
      role: "ADMIN",
      fullname: "Ken Admin",
      username: "kenadmin",
      email: "admin@edutrain.dev",
      password: "password123",
      phone: "081234567890",
      organization: "Edutrain",
      createdAt: isoDaysFromNow(-120),
    },
    {
      id: "acc-admin-2",
      role: "ADMIN",
      fullname: "Mira Admin",
      username: "miraadmin",
      email: "mira@edutrain.dev",
      password: "password123",
      phone: "081298765432",
      organization: "Edutrain",
      createdAt: isoDaysFromNow(-90),
    },
    {
      id: "acc-user-1",
      role: "USER",
      fullname: "Raka Pratama",
      username: "rakap",
      email: "raka@example.com",
      password: "password123",
      phone: "081111111111",
      organization: "UIN Bandung",
      createdAt: isoDaysFromNow(-45),
    },
    {
      id: "acc-user-2",
      role: "USER",
      fullname: "Dina Maharani",
      username: "dinam",
      email: "dina@example.com",
      password: "password123",
      phone: "082222222222",
      organization: "Diskominfo Jabar",
      createdAt: isoDaysFromNow(-30),
    },
    {
      id: "acc-user-3",
      role: "USER",
      fullname: "Farhan Akbar",
      username: "farhana",
      email: "farhan@example.com",
      password: "password123",
      phone: "083333333333",
      organization: "Telkom Indonesia",
      createdAt: isoDaysFromNow(-20),
    },
    {
      id: "acc-user-4",
      role: "USER",
      fullname: "Nadya Putri",
      username: "nadyap",
      email: "nadya@example.com",
      password: "password123",
      phone: "084444444444",
      organization: "Bank BJB",
      createdAt: isoDaysFromNow(-12),
    },
  ],
  banners: [
    { id: "banner-1", title: "Promo Training Juni", url: defaultImages.banner },
    { id: "banner-2", title: "Webinar Gratis Bulanan", url: defaultImages.workshop },
  ],
  faqs: [
    { id: "faq-1", question: "Bagaimana cara mendaftar?", answer: "Pilih event lalu lanjutkan ke pembayaran.", tag: "Payment", icon: "CreditCard" },
    { id: "faq-2", question: "Apakah tersedia sertifikat?", answer: "Ya, untuk event tertentu sertifikat tersedia setelah selesai.", tag: "Status", icon: "Truck" },
    { id: "faq-3", question: "Bagaimana refund dilakukan?", answer: "Refund diproses maksimal 7 hari kerja sesuai kebijakan.", tag: "Refunds", icon: "DollarSign" },
  ],
  videos: [
    { id: "video-1", title: "Intro Cyber Security", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: "video-2", title: "Belajar React Dasar", url: "https://www.youtube.com/embed/Ke90Tje7VS0" },
  ],
  webinars: [
    {
      id: "webinar-1",
      title: "Strategi SOC Modern",
      description: "Webinar pengenalan security operation center modern.",
      startTime: isoDaysFromNow(7, 13),
      endTime: isoDaysFromNow(7, 15),
      eventStatus: "ONLINE",
      maxAttendees: 150,
      price: 0,
      certificate: true,
      banner: defaultImages.training,
      isNew: true,
      category: { id: "cat-1", name: "Cyber Security" },
      subCategory: { id: "sub-1", name: "SOC Analyst" },
      lastWebinarHistory: { price: 0 },
      registeredUserIds: ["acc-user-1", "acc-user-2"],
      createdAt: isoDaysFromNow(-10),
    },
    {
      id: "webinar-2",
      title: "Deploy Next.js ke Production",
      description: "Membahas deployment pipeline dan best practice Next.js.",
      startTime: isoDaysFromNow(14, 10),
      endTime: isoDaysFromNow(14, 12),
      eventStatus: "OFFLINE",
      maxAttendees: 80,
      price: 50000,
      certificate: false,
      banner: defaultImages.workshop,
      isNew: false,
      category: { id: "cat-2", name: "Web Development" },
      subCategory: { id: "sub-2", name: "Frontend" },
      lastWebinarHistory: { price: 50000 },
      registeredUserIds: ["acc-user-3"],
      createdAt: isoDaysFromNow(-8),
    },
  ],
  workshops: [
    {
      id: "workshop-1",
      title: "Hands-on Threat Hunting",
      description: "Workshop intensif praktik threat hunting pada dataset insiden.",
      instructor: "Aldi Rahman",
      startTime: isoDaysFromNow(10, 9),
      endTime: isoDaysFromNow(10, 16),
      status: "LIVE",
      certificate: true,
      banner: defaultImages.workshop,
      isNew: true,
      soldCount: 21,
      category: { id: "cat-1", name: "Cyber Security" },
      subCategory: { id: "sub-1", name: "SOC Analyst" },
      lastWorkshopHistory: { price: 250000 },
      registeredUserIds: ["acc-user-2", "acc-user-4"],
      createdAt: isoDaysFromNow(-9),
    },
    {
      id: "workshop-2",
      title: "UI Architecture with React",
      description: "Workshop penyusunan arsitektur komponen React untuk tim frontend.",
      instructor: "Sinta Permata",
      startTime: isoDaysFromNow(18, 9),
      endTime: isoDaysFromNow(18, 15),
      status: "PLAYBACK",
      certificate: false,
      banner: defaultImages.training,
      isNew: false,
      soldCount: 14,
      category: { id: "cat-2", name: "Web Development" },
      subCategory: { id: "sub-2", name: "Frontend" },
      lastWorkshopHistory: { price: 175000 },
      registeredUserIds: ["acc-user-1"],
      createdAt: isoDaysFromNow(-6),
    },
  ],
  trainings: [
    {
      id: "training-1",
      title: "Bootcamp Incident Response",
      description: "<p>Pelatihan mendalam untuk incident response dan digital forensics dasar.</p>",
      syllabus: "<ul><li>Preparation</li><li>Containment</li><li>Eradication</li></ul>",
      startTime: isoDaysFromNow(21, 8),
      endTime: isoDaysFromNow(24, 16),
      status: "ONLINE",
      banner: defaultImages.training,
      isNew: true,
      isPopuler: true,
      hasCertificate: true,
      showPrice: true,
      urlExternalTitle: "Group Telegram IR",
      urlExternal: "https://t.me/edutrain-incident-response",
      category: { id: "cat-1", name: "Cyber Security" },
      subCategory: { id: "sub-1", name: "SOC Analyst" },
      lastTrainingHistory: { price: 750000, discount: 20 },
      materials: [
        {
          id: "material-1",
          title: "Playbook Incident Response",
          description: "Dokumen playbook untuk latihan.",
          url: "https://example.com/materials/playbook-ir.pdf",
          documentName: "playbook-ir.pdf",
        },
      ],
      registeredUserIds: ["acc-user-1", "acc-user-2", "acc-user-4"],
      createdAt: isoDaysFromNow(-15),
    },
    {
      id: "training-2",
      title: "Machine Learning for Analysts",
      description: "<p>Training data science untuk analis yang ingin mulai machine learning.</p>",
      syllabus: "<ul><li>Python basics</li><li>Model evaluation</li><li>Deployment intro</li></ul>",
      startTime: isoDaysFromNow(30, 8),
      endTime: isoDaysFromNow(33, 16),
      status: "OFFLINE",
      banner: defaultImages.training,
      isNew: false,
      isPopuler: false,
      hasCertificate: true,
      showPrice: true,
      urlExternalTitle: "",
      urlExternal: "",
      category: { id: "cat-3", name: "Data Science" },
      subCategory: { id: "sub-3", name: "Machine Learning" },
      lastTrainingHistory: { price: 950000, discount: 10 },
      materials: [],
      registeredUserIds: ["acc-user-3"],
      createdAt: isoDaysFromNow(-11),
    },
  ],
  orders: [
    {
      id: "order-1",
      accountId: "acc-user-1",
      eventType: "TRAINING",
      eventId: "training-1",
      createdAt: isoDaysFromNow(-5),
      isVerified: false,
    },
    {
      id: "order-2",
      accountId: "acc-user-2",
      eventType: "WEBINAR",
      eventId: "webinar-1",
      createdAt: isoDaysFromNow(-4),
      isVerified: true,
    },
    {
      id: "order-3",
      accountId: "acc-user-4",
      eventType: "WORKSHOP",
      eventId: "workshop-1",
      createdAt: isoDaysFromNow(-2),
      isVerified: false,
    },
  ],
};

function findCategory(state, name, fallback = null) {
  const category = state.categories.find((item) => item.name === name);
  return category || fallback || state.categories[0];
}

function findSubCategory(state, name, fallback = null) {
  const subCategory = state.subCategories.find((item) => item.name === name);
  return subCategory || fallback || state.subCategories[0];
}

function getEventByType(state, eventType, eventId) {
  if (eventType === "WEBINAR") {
    return state.webinars.find((item) => item.id === eventId) || null;
  }

  if (eventType === "WORKSHOP") {
    return state.workshops.find((item) => item.id === eventId) || null;
  }

  if (eventType === "TRAINING") {
    return state.trainings.find((item) => item.id === eventId) || null;
  }

  return null;
}

function buildOrderDetail(state, order) {
  return {
    ...order,
    account: state.accounts.find((account) => account.id === order.accountId) || null,
    event: getEventByType(state, order.eventType, order.eventId),
  };
}

const storage =
  typeof window !== "undefined"
    ? createJSONStorage(() => localStorage)
    : {
        getItem: () => null,
        setItem: () => undefined,
        removeItem: () => undefined,
      };

export const useMockApiStore = create(
  persist(
    (set, get) => ({
      ...clone(initialData),

      resetMockData: () => set(clone(initialData)),

      login: ({ email, password }) => {
        const admin = get().accounts.find((account) => account.role === "ADMIN" && account.email === email && account.password === password);
        return admin ? { success: true, token: `mock-token-${admin.id}`, account: admin } : { success: false };
      },

      logout: () => true,

      getStatistics: () => {
        const state = get();
        return {
          totalEvent: state.webinars.length + state.workshops.length + state.trainings.length,
          userCount: state.accounts.filter((item) => item.role === "USER").length,
          webinarCount: state.webinars.length,
          workshopCount: state.workshops.length,
          trainingCount: state.trainings.length,
        };
      },

      getCategories: () => clone(get().categories),
      addCategory: (payload) => {
        const data = normalizeInput(payload);
        const item = { id: createId("cat"), name: data.name };
        set((state) => ({ categories: [...state.categories, item] }));
        return clone(item);
      },

      getSubCategories: () => clone(get().subCategories),
      addSubCategory: (payload) => {
        const data = normalizeInput(payload);
        const item = { id: createId("sub"), name: data.name };
        set((state) => ({ subCategories: [...state.subCategories, item] }));
        return clone(item);
      },

      getAdminAccounts: () => clone(get().accounts.filter((account) => account.role === "ADMIN")),
      addAdminAccount: (payload) => {
        const data = normalizeInput(payload);
        const item = {
          id: createId("acc-admin"),
          role: "ADMIN",
          fullname: data.fullname || "",
          username: data.username || (data.email ? data.email.split("@")[0] : ""),
          email: data.email || "",
          password: data.password || "",
          phone: data.phone || "-",
          organization: data.organization || "Edutrain",
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ accounts: [...state.accounts, item] }));
        return clone(item);
      },
      editAdminAccount: (id, payload) => {
        const data = normalizeInput(payload);
        let updated = null;
        set((state) => ({
          accounts: state.accounts.map((account) => {
            if (account.id !== id) {
              return account;
            }

            updated = {
              ...account,
              fullname: data.fullname ?? account.fullname,
              email: data.email ?? account.email,
              password: data.password || account.password,
            };
            return updated;
          }),
        }));
        return clone(updated);
      },
      deleteAdminAccount: (id) => {
        set((state) => ({ accounts: state.accounts.filter((account) => account.id !== id) }));
        return true;
      },

      getUserAccounts: () => clone(get().accounts.filter((account) => account.role === "USER")),
      getUserAccountById: (id) => clone(get().accounts.find((account) => account.id === id) || null),
      addUserAccount: (payload) => {
        const data = normalizeInput(payload);
        const item = {
          id: createId("acc-user"),
          role: "USER",
          fullname: data.fullname || "",
          username: data.username || "",
          email: data.email || "",
          password: data.password || "",
          phone: data.phone || "-",
          organization: data.organization || "Dummy Organization",
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ accounts: [...state.accounts, item] }));
        return clone(item);
      },
      deleteUserAccount: (id) => {
        set((state) => ({
          accounts: state.accounts.filter((account) => account.id !== id),
          webinars: state.webinars.map((item) => ({ ...item, registeredUserIds: item.registeredUserIds.filter((userId) => userId !== id) })),
          workshops: state.workshops.map((item) => ({ ...item, registeredUserIds: item.registeredUserIds.filter((userId) => userId !== id) })),
          trainings: state.trainings.map((item) => ({ ...item, registeredUserIds: item.registeredUserIds.filter((userId) => userId !== id) })),
          orders: state.orders.filter((order) => order.accountId !== id),
        }));
        return true;
      },

      getBanners: () => clone(get().banners),
      addBanner: (payload) => {
        const data = normalizeInput(payload);
        const item = {
          id: createId("banner"),
          title: data.title || "New Banner",
          url: defaultImages.banner,
        };
        set((state) => ({ banners: [...state.banners, item] }));
        return clone(item);
      },
      editBanner: (id, payload) => {
        const data = normalizeInput(payload);
        let updated = null;
        set((state) => ({
          banners: state.banners.map((item) => {
            if (item.id !== id) {
              return item;
            }

            updated = { ...item, title: data.title ?? item.title, url: defaultImages.banner };
            return updated;
          }),
        }));
        return clone(updated);
      },
      deleteBanner: (id) => {
        set((state) => ({ banners: state.banners.filter((item) => item.id !== id) }));
        return true;
      },

      getFaqs: () => clone(get().faqs),
      addFaq: (payload) => {
        const data = normalizeInput(payload);
        const item = {
          id: createId("faq"),
          question: data.question || "",
          answer: data.answer || "",
          tag: data.tag || "",
          icon: data.icon || "Mail",
        };
        set((state) => ({ faqs: [...state.faqs, item] }));
        return clone(item);
      },
      editFaq: (id, payload) => {
        const data = normalizeInput(payload);
        let updated = null;
        set((state) => ({
          faqs: state.faqs.map((item) => {
            if (item.id !== id) {
              return item;
            }

            updated = { ...item, ...data };
            return updated;
          }),
        }));
        return clone(updated);
      },
      deleteFaq: (id) => {
        set((state) => ({ faqs: state.faqs.filter((item) => item.id !== id) }));
        return true;
      },

      getVideos: () => clone(get().videos),
      addVideo: (payload) => {
        const data = normalizeInput(payload);
        const item = {
          id: createId("video"),
          title: data.title || "",
          url: data.url || "",
        };
        set((state) => ({ videos: [...state.videos, item] }));
        return clone(item);
      },
      editVideo: (id, payload) => {
        const data = normalizeInput(payload);
        let updated = null;
        set((state) => ({
          videos: state.videos.map((item) => {
            if (item.id !== id) {
              return item;
            }

            updated = { ...item, ...data };
            return updated;
          }),
        }));
        return clone(updated);
      },
      deleteVideo: (id) => {
        set((state) => ({ videos: state.videos.filter((item) => item.id !== id) }));
        return true;
      },

      getWebinars: () => clone(get().webinars),
      getWebinarById: (id) => clone(get().webinars.find((item) => item.id === id) || null),
      getRegisteredWebinarUsers: (id) => {
        const state = get();
        const webinar = state.webinars.find((item) => item.id === id);
        if (!webinar) {
          return [];
        }

        return clone(state.accounts.filter((account) => webinar.registeredUserIds.includes(account.id)));
      },
      addWebinar: (payload) => {
        const state = get();
        const data = normalizeInput(payload);
        const category = findCategory(state, data.categoryName);
        const subCategory = findSubCategory(state, data.subCategoryName);
        const price = normalizePrice(data.price);
        const item = {
          id: createId("webinar"),
          title: data.title || "",
          description: data.description || "",
          startTime: data.startTime || new Date().toISOString(),
          endTime: data.endTime || new Date().toISOString(),
          eventStatus: data.eventStatus || "ONLINE",
          maxAttendees: normalizeNumber(data.maxAttendees, 0),
          price,
          certificate: true,
          banner: defaultImages.webinar,
          isNew: true,
          category: { id: category.id, name: category.name },
          subCategory: { id: subCategory.id, name: subCategory.name },
          lastWebinarHistory: { price },
          registeredUserIds: [],
          createdAt: new Date().toISOString(),
        };
        set((current) => ({ webinars: [...current.webinars, item] }));
        return clone(item);
      },
      editWebinar: (id, payload) => {
        const data = normalizeInput(payload);
        let updated = null;
        set((state) => ({
          webinars: state.webinars.map((item) => {
            if (item.id !== id) {
              return item;
            }

            const category = data.categoryName ? findCategory(state, data.categoryName, item.category) : item.category;
            const subCategory = data.subCategoryName ? findSubCategory(state, data.subCategoryName, item.subCategory) : item.subCategory;
            const nextPrice = data.price !== undefined && data.price !== "" ? normalizePrice(data.price, item.price) : item.price;

            updated = {
              ...item,
              title: data.title ?? item.title,
              description: data.description ?? item.description,
              startTime: data.startTime || item.startTime,
              endTime: data.endTime || item.endTime,
              eventStatus: data.eventStatus || item.eventStatus,
              maxAttendees: data.maxAttendees !== undefined && data.maxAttendees !== "" ? normalizeNumber(data.maxAttendees, item.maxAttendees) : item.maxAttendees,
              price: nextPrice,
              banner: data.banner ? defaultImages.webinar : item.banner,
              category: { id: category.id, name: category.name },
              subCategory: { id: subCategory.id, name: subCategory.name },
              lastWebinarHistory: { price: nextPrice },
            };
            return updated;
          }),
        }));
        return clone(updated);
      },
      deleteWebinar: (id) => {
        set((state) => ({
          webinars: state.webinars.filter((item) => item.id !== id),
          orders: state.orders.filter((order) => !(order.eventType === "WEBINAR" && order.eventId === id)),
        }));
        return true;
      },

      getWorkshops: () => clone(get().workshops),
      getWorkshopById: (id) => clone(get().workshops.find((item) => item.id === id) || null),
      getRegisteredWorkshopUsers: (id) => {
        const state = get();
        const workshop = state.workshops.find((item) => item.id === id);
        if (!workshop) {
          return [];
        }

        return clone(state.accounts.filter((account) => workshop.registeredUserIds.includes(account.id)));
      },
      addWorkshop: (payload) => {
        const state = get();
        const data = normalizeInput(payload);
        const category = findCategory(state, data.categoryName);
        const subCategory = findSubCategory(state, data.subCategoryName);
        const price = normalizePrice(data.price);
        const item = {
          id: createId("workshop"),
          title: data.title || "",
          description: data.description || "",
          instructor: data.instructor || "",
          startTime: data.startTime || new Date().toISOString(),
          endTime: data.endTime || new Date().toISOString(),
          status: data.status || "LIVE",
          certificate: true,
          banner: defaultImages.workshop,
          isNew: true,
          soldCount: 0,
          category: { id: category.id, name: category.name },
          subCategory: { id: subCategory.id, name: subCategory.name },
          lastWorkshopHistory: { price },
          registeredUserIds: [],
          createdAt: new Date().toISOString(),
        };
        set((current) => ({ workshops: [...current.workshops, item] }));
        return clone(item);
      },
      editWorkshop: (id, payload) => {
        const data = normalizeInput(payload);
        let updated = null;
        set((state) => ({
          workshops: state.workshops.map((item) => {
            if (item.id !== id) {
              return item;
            }

            const category = data.categoryName ? findCategory(state, data.categoryName, item.category) : item.category;
            const subCategory = data.subCategoryName ? findSubCategory(state, data.subCategoryName, item.subCategory) : item.subCategory;
            const nextPrice = data.price !== undefined && data.price !== "" ? normalizePrice(data.price, item.lastWorkshopHistory.price) : item.lastWorkshopHistory.price;

            updated = {
              ...item,
              title: data.title ?? item.title,
              description: data.description ?? item.description,
              instructor: data.instructor ?? item.instructor,
              startTime: data.startTime || item.startTime,
              endTime: data.endTime || item.endTime,
              status: data.status || item.status,
              banner: data.banner ? defaultImages.workshop : item.banner,
              category: { id: category.id, name: category.name },
              subCategory: { id: subCategory.id, name: subCategory.name },
              lastWorkshopHistory: { price: nextPrice },
            };
            return updated;
          }),
        }));
        return clone(updated);
      },
      deleteWorkshop: (id) => {
        set((state) => ({
          workshops: state.workshops.filter((item) => item.id !== id),
          orders: state.orders.filter((order) => !(order.eventType === "WORKSHOP" && order.eventId === id)),
        }));
        return true;
      },

      getTrainings: () => clone(get().trainings),
      getTrainingById: (id) => clone(get().trainings.find((item) => item.id === id) || null),
      getTrainingMaterials: (id) => {
        const training = get().trainings.find((item) => item.id === id);
        return clone(training?.materials || []);
      },
      getRegisteredTrainingUsers: (id) => {
        const state = get();
        const training = state.trainings.find((item) => item.id === id);
        if (!training) {
          return [];
        }

        return clone(state.accounts.filter((account) => training.registeredUserIds.includes(account.id)));
      },
      addTraining: (payload) => {
        const state = get();
        const data = normalizeInput(payload);
        const category = findCategory(state, data.categoryName);
        const subCategory = findSubCategory(state, data.subCategoryName);
        const price = normalizePrice(data.price);
        const discount = normalizeNumber(data.discount, 0);
        const item = {
          id: createId("training"),
          title: data.title || "",
          description: data.description || "",
          syllabus: data.syllabus || "",
          startTime: data.startTime || new Date().toISOString(),
          endTime: data.endTime || new Date().toISOString(),
          status: data.status || "ONLINE",
          banner: defaultImages.training,
          isNew: true,
          isPopuler: false,
          hasCertificate: true,
          showPrice: normalizeBoolean(data.showPrice, false),
          urlExternalTitle: "",
          urlExternal: "",
          category: { id: category.id, name: category.name },
          subCategory: { id: subCategory.id, name: subCategory.name },
          lastTrainingHistory: { price, discount },
          materials: [],
          registeredUserIds: [],
          createdAt: new Date().toISOString(),
        };
        set((current) => ({ trainings: [...current.trainings, item] }));
        return clone(item);
      },
      editTraining: (id, payload) => {
        const data = normalizeInput(payload);
        let updated = null;
        set((state) => ({
          trainings: state.trainings.map((item) => {
            if (item.id !== id) {
              return item;
            }

            const category = data.categoryName ? findCategory(state, data.categoryName, item.category) : item.category;
            const subCategory = data.subCategoryName ? findSubCategory(state, data.subCategoryName, item.subCategory) : item.subCategory;
            const nextPrice = data.price !== undefined && data.price !== "" ? normalizePrice(data.price, item.lastTrainingHistory.price) : item.lastTrainingHistory.price;
            const nextDiscount = data.discount !== undefined && data.discount !== "" ? normalizeNumber(data.discount, item.lastTrainingHistory.discount) : item.lastTrainingHistory.discount;

            updated = {
              ...item,
              title: data.title ?? item.title,
              description: data.description ?? item.description,
              syllabus: data.syllabus ?? item.syllabus,
              startTime: data.startTime || item.startTime,
              endTime: data.endTime || item.endTime,
              status: data.status || item.status,
              banner: data.banner ? defaultImages.training : item.banner,
              showPrice: data.showPrice !== undefined ? normalizeBoolean(data.showPrice, item.showPrice) : item.showPrice,
              urlExternalTitle: data.urlExternalTitle ?? item.urlExternalTitle,
              urlExternal: data.urlExternal ?? item.urlExternal,
              category: { id: category.id, name: category.name },
              subCategory: { id: subCategory.id, name: subCategory.name },
              lastTrainingHistory: { price: nextPrice, discount: nextDiscount },
            };
            return updated;
          }),
        }));
        return clone(updated);
      },
      deleteTraining: (id) => {
        set((state) => ({
          trainings: state.trainings.filter((item) => item.id !== id),
          orders: state.orders.filter((order) => !(order.eventType === "TRAINING" && order.eventId === id)),
        }));
        return true;
      },
      addTrainingMaterial: (id, payload) => {
        const data = normalizeInput(payload);
        const material = {
          id: createId("material"),
          title: data.title || "",
          description: data.description || "",
          url: data.url || `https://example.com/materials/${encodeURIComponent(data.document?.name || "document.pdf")}`,
          documentName: data.document?.name || "document.pdf",
        };
        set((state) => ({
          trainings: state.trainings.map((item) => {
            if (item.id !== id) {
              return item;
            }

            return {
              ...item,
              materials: [...item.materials, material],
            };
          }),
        }));
        return clone(material);
      },

      getOrders: () => {
        const state = get();
        return clone(state.orders.map((order) => buildOrderDetail(state, order)));
      },
      getOrderById: (id) => {
        const state = get();
        const order = state.orders.find((item) => item.id === id);
        return order ? clone(buildOrderDetail(state, order)) : null;
      },
      verifyOrder: (id) => {
        set((state) => ({
          orders: state.orders.map((order) => (order.id === id ? { ...order, isVerified: true } : order)),
        }));
        return true;
      },
      addOrder: (payload) => {
        const data = normalizeInput(payload);
        const item = {
          id: createId("order"),
          accountId: data.accountId,
          eventType: data.eventType,
          eventId: data.eventId,
          createdAt: new Date().toISOString(),
          isVerified: false,
        };
        set((state) => ({ orders: [...state.orders, item] }));
        return clone(item);
      },
      editOrder: (id, payload) => {
        const data = normalizeInput(payload);
        let updated = null;
        set((state) => ({
          orders: state.orders.map((order) => {
            if (order.id !== id) {
              return order;
            }

            updated = { ...order, ...data };
            return updated;
          }),
        }));
        return clone(updated);
      },
      deleteOrder: (id) => {
        set((state) => ({ orders: state.orders.filter((order) => order.id !== id) }));
        return true;
      },
    }),
    {
      name: "edutrain-mock-api-store",
      storage,
    }
  )
);
