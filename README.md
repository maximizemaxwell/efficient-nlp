# AI Journal Club - Efficient NLP

A modern, static website for an AI research paper reading group focused on Efficient NLP and mathematical optimization.

## 🎯 Project Overview

This website features a 14-week course schedule (including orientation) covering cutting-edge research in efficient natural language processing. Built with Astro for fast, static site generation with dark theme design.

### Key Features
- 📅 Weekly course schedule with clickable paper links
- 📄 Direct PDF download links for lecture materials
- 🎥 Video link integration
- 🌙 Professional dark theme design
- 📱 Fully responsive layout
- ⚡ Fast static site generation
- 🔗 Direct paper links to ACL Anthology, arXiv, etc.

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/your-username/efficient-nlp.git
cd efficient-nlp
npm install

# Development
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📁 Project Structure

```text
/
├── public/
│   └── pdfs/              # PDF lecture materials
│       ├── week0.pdf      # Week 0: Orientation
│       ├── week1.pdf      # Week 1: Efficient Methods Survey
│       └── ...            # week2.pdf through week13.pdf
├── src/
│   ├── data/
│   │   └── videos.json    # Video links configuration
│   ├── layouts/
│   │   └── Layout.astro   # Main layout component
│   └── pages/
│       └── index.astro    # Main course page
├── .github/workflows/
│   └── deploy.yml         # GitHub Actions deployment
└── package.json
```

## 📖 Content Management

### 📄 Adding PDF Files

1. **File Naming**: Use the format `weekN.pdf` where N is the week number (0-13)
2. **Location**: Place files in `public/pdfs/` directory
3. **Automatic**: PDF links appear automatically when files are present

```bash
# Example: Add Week 3 lecture PDF
cp your-drpruning-lecture.pdf public/pdfs/week3.pdf
git add public/pdfs/week3.pdf
git commit -m "Add Week 3 lecture: DRPruning"
git push
```

**Expected Files:**
```
public/pdfs/
├── week0.pdf   # Orientation
├── week1.pdf   # Efficient Methods for NLP Survey
├── week2.pdf   # Efficient Inference for LLMs Survey
├── week3.pdf   # DRPruning
├── week4.pdf   # QPruner
├── week5.pdf   # L4Q
├── week6.pdf   # ResLoRA
├── week7.pdf   # MeMoTune
├── week8.pdf   # DiffSkip
├── week9.pdf   # Constrained Decoding
├── week10.pdf  # DB-LLM
├── week11.pdf  # PruneVid
├── week12.pdf  # Continual Pre-training
└── week13.pdf  # Efficient LLMs Survey
```

### 🎥 Adding Video Links

1. **File Location**: Edit `src/data/videos.json`
2. **Format**: Use `"weekN": "video_url"` format
3. **Null Values**: Use `null` for weeks without videos

```json
{
  "week0": "https://youtube.com/watch?v=orientation-video",
  "week1": "https://youtube.com/watch?v=efficient-methods",
  "week2": null,
  "week3": "https://vimeo.com/drpruning-lecture",
  ...
}
```

**Example workflow:**
```bash
# Edit the video links file
vim src/data/videos.json

# Commit changes
git add src/data/videos.json
git commit -m "Add video links for weeks 1-3"
git push
```

## 🔧 Deployment

### GitHub Pages (Automatic)

1. **Setup**: Push to `main` branch
2. **Build**: GitHub Actions automatically builds and deploys
3. **URL**: Site available at `https://your-username.github.io/efficient-nlp`

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📚 Course Curriculum

The curriculum covers 14 weeks of efficient NLP research:

| Week | Topic | Venue | Paper Link |
|------|-------|--------|------------|
| **0** | Orientation | - | - |
| **1** | Efficient Methods Survey | TACL 2023 | [Link](https://aclanthology.org/2023.tacl-1.48/) |
| **2** | Efficient Inference Survey | arXiv 2024 | [Link](https://arxiv.org/abs/2404.14294) |
| **3** | DRPruning | ACL 2025 | [Link](https://aclanthology.org/2025.acl-long.1414/) |
| **4** | QPruner | NAACL 2025 | [Link](https://aclanthology.org/2025.findings-naacl.240/) |
| **5** | L4Q | ACL 2025 | [Link](https://aclanthology.org/2025.acl-long.99/) |
| **6** | ResLoRA | ACL 2024 | [Link](https://aclanthology.org/2024.findings-acl.525/) |
| **7** | MeMoTune | ACL 2025 | [Link](https://aclanthology.org/2025.findings-acl.208/) |
| **8** | DiffSkip | ACL 2025 | [Link](https://aclanthology.org/2025.findings-acl.377/) |
| **9** | Constrained Decoding | NAACL 2025 | [Link](https://aclanthology.org/2025.naacl-long.239/) |
| **10** | DB-LLM | ACL 2024 | [Link](https://aclanthology.org/2024.findings-acl.516/) |
| **11** | PruneVid | ACL 2025 | [Link](https://aclanthology.org/2025.findings-acl.1024/) |
| **12** | Continual Pre-training | ACL 2024 | [Link](https://aclanthology.org/2024.findings-acl.606/) |
| **13** | Efficient LLMs Survey | TMLR 2024 | [Link](https://arxiv.org/abs/2312.03863) |

## 🎨 Features

### Paper Integration
- **Clickable Titles**: Paper titles link directly to original sources
- **External Indicators**: Hover effects and external link icons
- **Multiple Sources**: ACL Anthology, arXiv, TMLR papers

### Resource Management
- **Static Files**: PDF links work automatically when files exist
- **Video Integration**: JSON-based video link management
- **Download Links**: Direct PDF downloads with proper naming

### Modern Design
- **Dark Theme**: Professional dark color scheme
- **Responsive**: Works on desktop, tablet, and mobile
- **Typography**: Clean, readable fonts for technical content
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🔧 Development

### Tech Stack
- **Framework**: Astro v5.14.1
- **Styling**: Vanilla CSS with modern features
- **Deployment**: GitHub Pages + GitHub Actions
- **Languages**: TypeScript, HTML, CSS

### File Watching
```bash
npm run dev
# Automatically reloads when you:
# - Add PDFs to public/pdfs/
# - Update videos.json
# - Modify any source files
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Add your content (PDFs, video links, etc.)
4. Commit changes (`git commit -m 'Add Week N materials'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: This is a static site optimized for GitHub Pages. All content is managed through files and JSON configuration for maximum simplicity and reliability.
