# Nurturing Digital Solutions Portfolio

A compassionate, supportive Next.js portfolio site for Chiara daSilva Santos, showcasing web development and information systems expertise while emphasizing a nurturing approach to client relationships and project development.

## 🤲 Vision

A warm, inviting digital space where **empathy meets expertise** to create meaningful connections. This portfolio demonstrates how technology can be used to support, protect, and enhance the lives of others through thoughtful design and caring implementation.

## 🧡 Archetype: The Caregiver

This portfolio embodies the **Caregiver** archetype:
- **Values**: Compassion, support, protection, nurturing
- **Voice**: Warm, reassuring, helpful, patient
- **Visuals**: Soft colors, rounded elements, approachable design
- **Mission**: To create digital solutions that genuinely help and support users

## 🛠 Core Features

- 💼 **Professional Showcase**: Highlighting skills and projects that demonstrate supportive solutions
- 📱 **Accessible Design**: Ensuring everyone can navigate and engage with the content
- 🤝 **Personalized Contact Options**: Multiple ways to connect, including a thoughtful contact form
- 📅 **Meeting Scheduler**: Calendly integration for convenient, stress-free consultation booking
- 🧩 **User-Centered Elements**: Intuitive navigation and helpful information presentation
- 💬 **Clear Communication**: Straightforward language that makes complex concepts accessible

## ⚙️ Tech Stack

- **Frontend**: Next.js 14+ with React and TypeScript
- **Styling**: TailwindCSS with custom components
- **Animation**: Framer Motion for gentle, supportive transitions
- **UI Components**: Radix UI for accessible, inclusive components
- **Scheduling**: Calendly integration for convenient meeting arrangements
- **Hosting**: Vercel for reliable, stable deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cdasilvasantos/is322-portfolio.git
cd is322-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Customization

### Personalization

1. Update the site content in `src/app/page.tsx` with your own information
2. Replace placeholder images in the `public` folder with your own
3. Customize colors and styling in `tailwind.config.js`
4. Update the Calendly link in `src/components/ContactSection.tsx`

## 📦 Project Structure

```
is322-portfolio/
├── public/              # Static assets and images
│   ├── profile-image.jpg  # Personal profile image
│   ├── portfolio-project.jpg # Portfolio project image
│   ├── luxcore.jpg      # LuxCore project image
│   ├── goswim.jpg       # GoSwim project image
│   └── hero-bg.jpg      # Background image
├── src/                 # Source code
│   ├── app/             # Next.js app router
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # Reusable components
│   │   ├── CreativeHero.tsx        # Hero section
│   │   ├── PortfolioNavBar.tsx     # Navigation bar
│   │   ├── ProjectCard.tsx         # Project showcase
│   │   ├── ContactSection.tsx      # Contact form and info
│   │   ├── CalendlyEmbed.tsx       # Meeting scheduler
│   │   └── ui/                     # UI components
│   └── lib/             # Utility functions
├── package.json         # Dependencies
├── tailwind.config.js   # TailwindCSS configuration
└── README.md            # Project documentation
```

## 👩‍💻 About Chiara daSilva Santos

Chiara is a web developer and information systems professional with a passion for creating digital solutions that genuinely help people. Her approach combines technical expertise with empathy and understanding, ensuring that every project not only functions flawlessly but also truly serves the needs of its users.

Key skills include:
- HTML, CSS, Java, Python, Next.js
- Linux, Bash Scripting, Docker, CI/CD Pipeline
- Git, GitHub, SQL
- Microsoft 365, Google Workspace, Figma, Playwright
- Apple iWork Suite

## 🌟 Portfolio Highlights

- **Personal Portfolio**: A responsive showcase of skills and projects
- **LuxCore Steakhouse Website**: A user-friendly restaurant website with elegant design
- **GoSwim Website**: An informative platform for swimming lessons and techniques

## 🎨 AI-Generated Imagery

This portfolio utilizes AI-generated imagery created with Replicate's Stability AI SDXL model to ensure a cohesive, professional visual presentation:

- **Project Images**: Each project card features a custom AI-generated image that visually represents the project's purpose and design aesthetic
- **Image Generation Process**: 
  - Custom prompts were crafted to reflect each project's unique characteristics
  - Images were generated using the Stability AI SDXL model via Replicate's API
  - A Node.js script (`src/lib/generate-images.js`) handles the image generation process

To regenerate images or create new ones:
```bash
# Install dependencies
npm install replicate

# Set up your Replicate API token in the generate-images.sh file
# IMPORTANT: Never commit API tokens to version control!
# Replace "your-replicate-api-token-here" with your actual token
./generate-images.sh
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Framer Motion for the animation library
- Radix UI for accessible component primitives
- Calendly for the scheduling integration
