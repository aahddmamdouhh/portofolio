# Ahd Mamdouh - Portfolio Website

A modern, creative, and responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop)

## 🚀 Features

- ✨ **Modern Design**: Clean, elegant, and futuristic design with smooth animations
- 🎨 **Beautiful UI**: Light theme with subtle gradients and pastel tones
- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging user experience
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal speed
- 🎯 **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- ♿ **Accessible**: Following accessibility best practices

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Sections

1. **Home/Hero**: Eye-catching introduction with animated background
2. **About**: Personal introduction and interests
3. **Skills**: Interactive display of technologies and tools
4. **Projects**: Showcase of featured work with links
5. **Art/Creative Work**: Gallery of creative projects
6. **Contact**: Contact form and social links
7. **Footer**: Additional information and links

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahdmamdouh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero/Home section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Art.tsx             # Creative work gallery
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## 🎨 Customization

### Personal Information

Update the following in the component files:

- **Name & Title**: `components/Hero.tsx`
- **About Text**: `components/About.tsx`
- **Skills**: `components/Skills.tsx` - Add/remove skills from the array
- **Projects**: `components/Projects.tsx` - Update project details
- **Artwork**: `components/Art.tsx` - Add your creative work
- **Contact Info**: `components/Contact.tsx` - Update email and social links

### Colors & Theme

Modify colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  },
}
```

### Animations

All animations are in the component files using Framer Motion. You can customize:
- Animation duration
- Easing functions
- Stagger effects
- Hover animations

## 📦 Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Then start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

Your site will be live at `https://yourproject.vercel.app`

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo to Netlify
- **GitHub Pages**: Use `next export` for static export
- **Custom Server**: Deploy to any Node.js hosting provider

## 📝 Environment Variables

If you want to add form submission functionality (e.g., EmailJS, SendGrid):

1. Create `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update `components/Contact.tsx` to use the email service

## 🔧 Additional Features to Add

- [ ] Blog section with MDX
- [ ] Dark mode toggle
- [ ] Analytics (Google Analytics, Vercel Analytics)
- [ ] CMS integration (Sanity, Contentful)
- [ ] Email service integration
- [ ] Downloadable resume/CV
- [ ] Testimonials section
- [ ] Multi-language support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Ahd Mamdouh**

- GitHub: [@ahdmamdouh](https://github.com/ahdmamdouh)
- LinkedIn: [Ahd Mamdouh](https://linkedin.com/in/ahdmamdouh)

## 💖 Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ in Egypt

