<div align="center">

# 🐾 Image Based Animal Type Classification

### *Einstein Brothers — Second Semester Interdisciplinary Project*

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

<br/>

> **An intelligent image-based classification system that identifies animal types using deep learning and computer vision techniques.**

<br/>

[📖 About](#-about) • [🚀 Getting Started](#-getting-started) • [📁 Project Structure](#-project-structure) • [👥 Team](#-team) • [🤝 Contributing](#-contributing-guidelines) • [📄 License](#-license)

</div>

---

## 📖 About

**Image Based Animal Type Classification** is a machine learning project that leverages convolutional neural networks (CNNs) to classify animals from images. Given an input image, the model predicts the type/category of animal with high accuracy.

### 🎯 Key Features

- 🔍 **animal classification** — Identify animal species from a single image
- ⚡ **Fast inference** — Optimized model for real-time predictions
- 📊 **High accuracy** — Trained on large-scale annotated datasets
- 🌐 **Easy-to-use interface** — Simple API and interactive demo
- 📈 **Extensible** — Easily add new animal categories with minimal re-training

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Python 3.9 or higher
- pip (Python package manager)
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/TheAmazingPushkar/Einstein-Brothers.git
cd Einstein-Brothers

# 2. Create a virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# 3. Install required dependencies
pip install -r requirements.txt
```

### Usage

```bash
# Run the classification on a single image
python classify.py --image path/to/your/image.jpg

# Launch the interactive demo
python app.py
```

> **Note:** Pre-trained model weights should be placed in the `models/` directory. See [Project Structure](#-project-structure) for details.

---

## 📁 Project Structure

```
Einstein-Brothers/
│
├── 📂 data/                    # Dataset directory
│   ├── train/                  # Training images (organized by class)
│   ├── val/                    # Validation images
│   └── test/                   # Test images
│
├── 📂 models/                  # Saved model weights & architectures
│   └── best_model.h5
│
├── 📂 notebooks/               # Jupyter notebooks for EDA & experiments
│   ├── EDA.ipynb
│   └── model_training.ipynb
│
├── 📂 src/                     # Core source code
│   ├── dataset.py              # Dataset loading & preprocessing
│   ├── model.py                # CNN model definition
│   ├── train.py                # Training pipeline
│   └── evaluate.py             # Evaluation & metrics
│
├── 📂 tests/                   # Unit & integration tests
│
├── app.py                      # Interactive demo application
├── classify.py                 # CLI classification script
├── requirements.txt            # Python dependencies
├── LICENSE
└── README.md
```

---

## 👥 Team

<div align="center">

| Avatar | Name | Role | GitHub |
|:------:|:----:|:----:|:------:|
| 🧑‍💻 | **Yashmith** | Model Architecture & Training | *update with GitHub username* |
| 🧑‍💻 | **Pushkar** | Project Lead & Backend | [@TheAmazingPushkar](https://github.com/TheAmazingPushkar) |
| 🧑‍💻 | **Satvik** | Data Collection & Preprocessing | *update with GitHub username* |
| 🧑‍💻 | **Harsha** | Model Evaluation & Testing | *update with GitHub username* |
| 🧑‍💻 | **Puneeth** | UI / Demo Application | *update with GitHub username* |
| 🧑‍💻 | **Mallikarjun** | Documentation & Research | *update with GitHub username* |

</div>

---

## 🤝 Contributing Guidelines

We welcome contributions from all team members! Please follow these rules to keep the codebase clean and collaborative.

### 📋 Branch Naming Convention

Always create a new branch for your work. Never push directly to `main`.

```
feature/<your-name>/<short-description>     # For new features
bugfix/<your-name>/<short-description>      # For bug fixes
docs/<your-name>/<short-description>        # For documentation updates
experiment/<your-name>/<short-description>  # For experiments
```

**Example:**
```bash
git checkout -b feature/pushkar/add-cnn-model
```

### 🔄 Workflow

1. **Sync your fork / branch** before starting work:
   ```bash
   git fetch origin
   git checkout main
   git pull origin main
   git checkout -b feature/<your-name>/<description>
   ```

2. **Make focused commits** — one logical change per commit:
   ```bash
   git add .
   git commit -m "feat: add ResNet50 backbone for feature extraction"
   ```

3. **Push your branch** and open a Pull Request:
   ```bash
   git push origin feature/<your-name>/<description>
   ```

4. **Open a Pull Request** on GitHub targeting the `main` branch.

### ✅ Pull Request Rules

- [ ] PR title must be clear and descriptive
- [ ] Add a short description of what was changed and why
- [ ] At least **1 team member must review and approve** before merging
- [ ] All CI checks (if any) must pass
- [ ] No merge conflicts — resolve them before requesting review
- [ ] Link any related issue in the PR description

### 📝 Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) style:

| Prefix | When to use |
|--------|-------------|
| `feat:` | Adding a new feature |
| `fix:` | Fixing a bug |
| `docs:` | Documentation changes |
| `style:` | Code formatting (no logic change) |
| `refactor:` | Code restructuring |
| `test:` | Adding or updating tests |
| `chore:` | Build/config changes |

**Examples:**
```
feat: add data augmentation pipeline
fix: resolve image normalization bug
docs: update installation instructions
```

### 🚫 Rules to Follow

- ❌ **Do NOT** push directly to `main` or `develop`
- ❌ **Do NOT** commit large binary files (datasets, model weights > 100 MB) — use Git LFS or cloud storage
- ❌ **Do NOT** hard-code file paths — use relative paths or config files
- ❌ **Do NOT** commit secrets, API keys, or passwords
- ✅ **DO** write meaningful commit messages
- ✅ **DO** keep your branch up-to-date with `main`
- ✅ **DO** delete your branch after it's merged
- ✅ **DO** comment your code where necessary

### 🐛 Reporting Issues

If you find a bug or have a suggestion:

1. Open an [Issue](https://github.com/TheAmazingPushkar/Einstein-Brothers/issues) on GitHub
2. Use a clear title: `[BUG] Short description` or `[FEATURE] Short description`
3. Provide as much detail as possible (steps to reproduce, expected vs actual behavior)

---

## 📊 Model Performance

| Metric | Value |
|--------|-------|
| Training Accuracy | *TBD* |
| Validation Accuracy | *TBD* |
| Test Accuracy | *TBD* |
| Inference Time | *TBD* |

> Results will be updated as the project progresses.

---

## 🛠️ Tech Stack

<div align="center">

| Category | Tools / Libraries |
|----------|------------------|
| Language | Python 3.9+ |
| Deep Learning | TensorFlow / Keras |
| Data Handling | NumPy, Pandas |
| Visualization | Matplotlib, Seaborn |
| Image Processing | OpenCV, Pillow |
| Experiment Tracking | *TBD* |
| Deployment | Flask / Streamlit |

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by the **Einstein Brothers** team

*RNSIT University — Second Semester Interdisciplinary Project, 2026*

⭐ If you find this project helpful, please give it a star!

</div>
