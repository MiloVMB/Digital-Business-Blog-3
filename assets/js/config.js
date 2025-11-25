const defaultConfig = {
  background_color: '#111827',
  surface_color: '#1f2937',
  text_color: '#f3f4f6',
  primary_action_color: '#10b981',
  secondary_action_color: '#374151',
  font_family: 'system-ui',
  font_size: 16,
  hero_title: 'Next-Gen Football Intelligence',
  hero_subtitle:
    "PlayMetrics transforms raw game data into championship-winning insights through cutting-edge AI technology. We empower coaches and players to unlock their full potential with real-time analytics that reveal what the naked eye can't see.",
  cta_button: '🚀 Start Free Trial',
  features_title: 'Game-Changing Features',
  testimonials_title: 'Trusted by Champions',
  pricing_title: 'Plans That Scale With You',
  about_title: 'About PlayMetrics',
  contact_title: 'Ready to Transform Your Game?'
};

async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'system-ui, -apple-system, sans-serif';
  const baseSize = config.font_size || defaultConfig.font_size;

  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;

  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    if (index % 2 === 1) {
      section.style.backgroundColor = surfaceColor;
    } else {
      section.style.backgroundColor = backgroundColor;
    }
  });

  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  if (nav) nav.style.backgroundColor = backgroundColor;
  if (footer) footer.style.backgroundColor = backgroundColor;

  const cards = document.querySelectorAll('.bg-gray-900, .bg-gray-800');
  cards.forEach(card => {
    card.style.backgroundColor = surfaceColor;
    card.style.color = textColor;
  });

  const primaryButtons = document.querySelectorAll('.bg-green-500');
  primaryButtons.forEach(btn => {
    btn.style.backgroundColor = primaryColor;
  });

  const secondaryButtons = document.querySelectorAll('.bg-gray-700');
  secondaryButtons.forEach(btn => {
    btn.style.backgroundColor = secondaryColor;
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.style.color = textColor;
  });

  const gradientTexts = document.querySelectorAll('.gradient-text');
  gradientTexts.forEach(el => {
    el.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`;
    el.style.webkitBackgroundClip = 'text';
    el.style.webkitTextFillColor = 'transparent';
    el.style.backgroundClip = 'text';
  });

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
    heroTitle.style.fontSize = `${baseSize * 3}px`;
    heroTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
  }

  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) {
    heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
    heroSubtitle.style.fontSize = `${baseSize * 1.25}px`;
    heroSubtitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
  }

  const ctaButton = document.getElementById('ctaButton');
  if (ctaButton) {
    ctaButton.textContent = config.cta_button || defaultConfig.cta_button;
    ctaButton.style.fontSize = `${baseSize * 1.125}px`;
    ctaButton.style.fontFamily = `${customFont}, ${baseFontStack}`;
  }

  const featuresTitle = document.getElementById('featuresTitle');
  if (featuresTitle) {
    featuresTitle.textContent = config.features_title || defaultConfig.features_title;
    featuresTitle.style.fontSize = `${baseSize * 2.5}px`;
    featuresTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
  }

  const testimonialsTitle = document.getElementById('testimonialsTitle');
  if (testimonialsTitle) {
    testimonialsTitle.textContent = config.testimonials_title || defaultConfig.testimonials_title;
    testimonialsTitle.style.fontSize = `${baseSize * 2.5}px`;
    testimonialsTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
  }

  const pricingTitle = document.getElementById('pricingTitle');
  if (pricingTitle) {
    pricingTitle.textContent = config.pricing_title || defaultConfig.pricing_title;
    pricingTitle.style.fontSize = `${baseSize * 2.5}px`;
    pricingTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
  }

  const aboutTitle = document.getElementById('aboutTitle');
  if (aboutTitle) {
    aboutTitle.textContent = config.about_title || defaultConfig.about_title;
    aboutTitle.style.fontSize = `${baseSize * 2.5}px`;
    aboutTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
  }

  const contactTitle = document.getElementById('contactTitle');
  if (contactTitle) {
    contactTitle.textContent = config.contact_title || defaultConfig.contact_title;
    contactTitle.style.fontSize = `${baseSize * 2.5}px`;
    contactTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
  }

  const allText = document.querySelectorAll(
    'p, li, label, input, textarea, button, a, h3, h4'
  );
  allText.forEach(el => {
    el.style.fontFamily = `${customFont}, ${baseFontStack}`;
  });
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: value => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: value => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: value => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: value => {
          config.primary_action_color = value;
          window.elementSdk.setConfig({ primary_action_color: value });
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: value => {
          config.secondary_action_color = value;
          window.elementSdk.setConfig({ secondary_action_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: value => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: value => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['hero_title', config.hero_title || defaultConfig.hero_title],
    ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
    ['cta_button', config.cta_button || defaultConfig.cta_button],
    ['features_title', config.features_title || defaultConfig.features_title],
    ['testimonials_title', config.testimonials_title || defaultConfig.testimonials_title],
    ['pricing_title', config.pricing_title || defaultConfig.pricing_title],
    ['about_title', config.about_title || defaultConfig.about_title],
    ['contact_title', config.contact_title || defaultConfig.contact_title]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}
