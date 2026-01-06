# 🚀 Modern Portfolio Website with AWS Amplify

A stunning, responsive portfolio website built with **React.js** and integrated with **AWS Amplify**, **AppSync (GraphQL)**, and **DynamoDB**. Features a fully functional contact form that stores messages securely in the cloud.

![Portfolio Banner](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=aws-amplify&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

---

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 💬 **Contact Form** - Integrated with AWS AppSync GraphQL API
- 🗄️ **Cloud Storage** - Messages stored in DynamoDB
- ⚡ **Fast Performance** - Optimized React components with lazy loading
- 🔒 **Secure** - Public API key authentication for contact submissions
- 🎭 **Smooth Animations** - Intersection Observer for scroll-triggered effects
- 🌐 **Easy Deployment** - One-command deployment with Amplify CLI

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend framework |
| **AWS Amplify** | Backend infrastructure |
| **AWS AppSync** | GraphQL API layer |
| **DynamoDB** | NoSQL database |
| **Tailwind CSS** | Styling framework |
| **Lucide React** | Icon library |
| **AWS Amplify Hosting** | Deployment & hosting |

---

## 📁 Project Structure

```
portfolio-react/
├── amplify/                    # Amplify backend configuration
│   ├── backend/
│   │   ├── api/
│   │   │   └── portfolioapi/
│   │   │       └── schema.graphql
│   │   └── auth/
│   └── team-provider-info.json
├── src/
│   ├── components/
│   │   ├── Contact.js          # Contact form component
│   │   ├── Projects.js         # Projects showcase
│   │   └── Skills.js           # Skills section
│   ├── graphql/
│   │   ├── mutations.js        # GraphQL mutations
│   │   └── queries.js          # GraphQL queries
│   ├── aws-exports.js          # Auto-generated Amplify config
│   ├── App.js                  # Main app component
│   └── index.js                # Entry point
├── public/
│   ├── index.html
│   └── favicon.ico
├── build/                      # Production build (generated)
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- AWS Account
- Amplify CLI installed globally

```bash
npm install -g @aws-amplify/cli
```

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sohampawar/portfolio-react.git
cd portfolio-react
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Initialize Amplify

```bash
amplify init
```

**Configuration:**
```
? Enter a name for the project: portfolioreact
? Initialize the project with the above configuration? No
? Enter a name for the environment: dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building: javascript
? What javascript framework are you using: react
? Source Directory Path: src
? Distribution Directory Path: build
? Build Command: npm run build
? Start Command: npm start
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use: default
```

---

## 🔧 Backend Setup

### GraphQL Schema

Create your API schema (`amplify/backend/api/portfolioapi/schema.graphql`):

```graphql
type Contact @model @auth(rules: [{ allow: public }]) {
  id: ID!
  fullName: String!
  email: String!
  mobile: String
  subject: String
  message: String!
  createdAt: AWSDateTime!
}
```

### Deploy Backend

```bash
amplify add api
```

**Configuration:**
```
? Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create: portfolioapi
? Choose a schema template: Single object with fields
? Do you want to edit the schema now? Yes
```

Push your changes to AWS:

```bash
amplify push
```

This will:
- ✅ Create DynamoDB table
- ✅ Deploy AppSync GraphQL API
- ✅ Generate API key
- ✅ Update `aws-exports.js`

---

## 💻 Local Development

### Run Development Server

```bash
npm start
```

Your app will be available at:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

---

## 📤 Contact Form Implementation

### Frontend (React)

```javascript
import { API, graphqlOperation } from 'aws-amplify';
import { createContact } from './graphql/mutations';

const handleSubmit = async (formData) => {
  try {
    const result = await API.graphql(
      graphqlOperation(createContact, {
        input: {
          fullName: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          subject: formData.subject,
          message: formData.message
        }
      })
    );
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### GraphQL Mutation

```javascript
export const createContact = `
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      id
      fullName
      email
      mobile
      subject
      message
      createdAt
    }
  }
`;
```

---

## 🌐 Deploy to AWS Amplify Hosting

### Option 1: Manual Deployment

```bash
amplify add hosting
```

Select:
```
? Select the plugin module to execute: Hosting with Amplify Console
? Choose a type: Manual deployment
```

Deploy:
```bash
amplify publish
```

### Option 2: Continuous Deployment (GitHub)

```bash
amplify add hosting
```

Select:
```
? Select the plugin module to execute: Hosting with Amplify Console
? Choose a type: Continuous deployment (Git-based deployments)
```

Connect your GitHub repository and Amplify will automatically deploy on every push to your main branch.

---

## 📊 View Stored Data

### Using AWS Console

1. Go to [AWS Console](https://console.aws.amazon.com/)
2. Navigate to **DynamoDB**
3. Select **Tables** from the left menu
4. Find table: `Contact-{env}-{hash}`
5. Click **Explore table items**
6. View all submitted contact form messages

### Using Amplify Admin UI

```bash
amplify console
```

Select **Admin UI** to manage your backend visually.

---

## 🎨 Customization

### Update Personal Information

Edit `src/App.js`:

```javascript
const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername"
};
```

### Modify Color Scheme

Update Tailwind classes in components:

```javascript
// Change gradient colors
className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"

// Change accent colors
className="text-blue-400"
className="border-blue-500/20"
```

### Add More Projects

Edit the `projects` array in `src/App.js`:

```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    color: 'from-blue-500 to-purple-600',
    link: 'https://yourproject.com'
  }
];
```

---

## 🐛 Troubleshooting

### Common Issues

#### ❌ GraphQL Errors

**Issue:** API calls failing

**Solution:**
```bash
# Ensure aws-exports.js is properly configured
# Check if Amplify is initialized in App.js
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);
```

#### ❌ Build Errors

**Issue:** Build fails in production

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### ❌ Contact Form Not Saving

**Issue:** Data not appearing in DynamoDB

**Solution:**
1. Verify API key is active in AppSync
2. Check CloudWatch logs for errors
3. Ensure `@auth(rules: [{ allow: public }])` is in schema
4. Confirm region matches in `aws-exports.js`

#### ❌ Amplify CLI Issues

**Issue:** Commands not working

**Solution:**
```bash
# Reinstall Amplify CLI
npm uninstall -g @aws-amplify/cli
npm install -g @aws-amplify/cli
amplify configure
```

---

## 📈 Performance Optimization

- ✅ Code splitting with React.lazy()
- ✅ Image optimization
- ✅ Minified production build
- ✅ CDN distribution via Amplify Hosting
- ✅ Lazy loading for animations
- ✅ Optimized GraphQL queries

---

## 🔒 Security Best Practices

- ✅ API Key authentication for public endpoints
- ✅ HTTPS enforced by Amplify Hosting
- ✅ Environment variables for sensitive data
- ✅ CORS properly configured
- ✅ Rate limiting on API Gateway
- ✅ Input validation on both frontend and backend

---

## 📝 Environment Variables

Create `.env.local` file (optional):

```env
REACT_APP_AWS_REGION=us-east-1
REACT_APP_USER_POOL_ID=your_user_pool_id
REACT_APP_WEB_CLIENT_ID=your_client_id
```

---

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Test Contact Form

1. Fill out all required fields
2. Submit the form
3. Check AWS Console → DynamoDB
4. Verify new entry appears in table

---

## 📚 Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [GraphQL Guide](https://graphql.org/learn/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [AWS AppSync](https://docs.aws.amazon.com/appsync/)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 👥 Contributors

Thanks to these wonderful people who have contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/sohampawar7030">
        <img src="https://github.com/sohampawar.png" width="100px;" alt="Soham Pawar"/>
        <br />
        <sub><b>Soham Pawar</b></sub>
      </a>
      <br />
      <sub>Backend Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/samruddhikangude">
        <img src="https://github.com/samruddhikangude.png" width="100px;" alt="Samruddhi Kangude"/>
        <br />
        <sub><b>Samruddhi Kangude</b></sub>
      </a>
      <br />
      <sub>FrontEnd Developer</sub>
    </td>
  </tr>
</table>

---

## 📧 Contact

**Soham Pawar**

- 📧 Email: pawarsoham2416@gmail.com
- 💼 LinkedIn: [linkedin.com/in/sohampawar](https://linkedin.com/in/sohampawar/1030)
- 🐙 GitHub: [github.com/sohampawar](https://github.com/sohampawar/7030)
- 📍 Location: Pune, Maharashtra, India

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Soham Pawar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐️ on GitHub!

---

## 🗺️ Roadmap

- [ ] Add blog section with CMS
- [ ] Implement dark/light theme toggle
- [ ] Add testimonials section
- [ ] Integrate Google Analytics
- [ ] Add project filtering by technology
- [ ] Implement email notifications via SES
- [ ] Add resume download feature
- [ ] Create admin dashboard for content management

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/sohampawar/portfolio-react?style=social)
![GitHub forks](https://img.shields.io/github/forks/sohampawar/portfolio-react?style=social)
![GitHub issues](https://img.shields.io/github/issues/sohampawar/portfolio-react)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sohampawar/portfolio-react)

---

**Built with ❤️ by Soham Pawar and Samruddhi Kangude**

*Last Updated: January 2025*
