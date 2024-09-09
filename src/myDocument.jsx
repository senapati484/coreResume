import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderBottom: "1px solid #000",
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Sayan Senapati</Text>
        <Text style={styles.text}>Passionate Full Stack Developer</Text>
        <Text style={styles.text}>
          Contact: +91 8653420095 | Email: Sayansenapati2544@gmail.com
        </Text>
        <Text style={styles.text}>Location: Amta, Howrah, West Bengal</Text>
        <Text style={styles.text}>
          Website: https://sayansenapati-1.web.app
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Core Skills</Text>
        <Text style={styles.text}>
          Languages: C, JavaScript, Java, Python, SQL
        </Text>
        <Text style={styles.text}>Frameworks: React, Node</Text>
        <Text style={styles.text}>
          Database: Firebase, SupaBase, MongoDB, PostgreSQL
        </Text>
        <Text style={styles.text}>
          Others: Spline, Matter.js, Email.js API, Auth, Tailwind
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Education</Text>
        <Text style={styles.subHeader}>The Calcutta Technical School</Text>
        <Text style={styles.text}>
          Diploma in Computer Science (Apr 2022 - May 2025)
        </Text>
        <Text style={styles.text}>GPA: 8.2/10 (4th sem)</Text>
        <Text style={styles.subHeader}>Amta Nityananada High School</Text>
        <Text style={styles.text}>X - 74.3% | XII - 73.5%</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Projects</Text>
        <View>
          <Text style={styles.subHeader}>1. Portfolio Website</Text>
          <Text style={styles.text}>
            Developed and deployed a personalized portfolio website utilizing
            React and Firebase.
          </Text>

          <Text style={styles.subHeader}>2. AI Travel Planner</Text>
          <Text style={styles.text}>
            Designed and implemented a fully functional Travel Planner,
            integrated predefined AI/ML model (Gemini API) for generating travel
            plans.
          </Text>
          <Text style={styles.text}>
            Utilized: React, Firebase, Google Auth, Google Maps API
          </Text>

          <Text style={styles.subHeader}>3. Today I Learned</Text>
          <Text style={styles.text}>
            Knowledge sharing platform for everyone. Utilized React, Supabase,
            Tailwind.
          </Text>

          <Text style={styles.subHeader}>4. Other Projects</Text>
          <Text style={styles.text}>
            Chat AI: A personalized AI-powered chatbot made using the Gemini
            API.
          </Text>
          <Text style={styles.text}>
            CodeWithSayan: A course-selling website demo made using React.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);
