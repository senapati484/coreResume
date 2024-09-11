import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 40,
  },
  section: {
    flexGrow: 1,
    marginBottom: 10,
  },
  subSection: {
    marginBottom: 5,
    marginLeft: 5,
  },
  smallSection: {
    flexDirection: "column",
    width: "350px",
  },
  bigSection: {
    flexDirection: "row",
  },
  Nameheader: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
  },
  header: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
    fontStyle: "uppercase",
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
  AboutText: {
    fontSize: 16,
    marginBottom: 5,
  },
  TextEmail: {
    fontSize: 14,
    marginBottom: 5,
  },
});

// Create Document Component
export const MyDocument = () => {
  // Fetch form data from local storage
  const formData = JSON.parse(localStorage.getItem("resumeFormData")) || {
    name: "",
    email: "",
    phone: "",
    about: "",
    homeLocation: "",
    experience: [{ company: "", years: "", field: "" }],
    skills: [""],
    education: [
      { college: "", startYear: "", endYear: "", gpa: "", course: "" },
    ],
    projects: [{ name: "", about: "", time: "", skillsUsed: [""] }],
  };

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          {formData.name && (
            <Text style={styles.Nameheader}>{formData.name}</Text>
          )}
          {formData.about && (
            <Text style={styles.AboutText}>{formData.about}</Text>
          )}
        </View>

        <View style={styles.bigSection}>
          <View style={styles.smallSection}>
            {formData.email || formData.phone || formData.homeLocation ? (
              <View style={styles.section}>
                <Text style={styles.header}>Contact:</Text>
                <View style={styles.subSection}>
                  {formData.email && (
                    <Text style={styles.TextEmail}>
                      Email: {formData.email}
                    </Text>
                  )}
                  {formData.phone && (
                    <Text style={styles.text}>Phone No: {formData.phone}</Text>
                  )}
                  {formData.homeLocation && (
                    <Text style={styles.text}>
                      Home Location: {formData.homeLocation}
                    </Text>
                  )}
                </View>
              </View>
            ) : null}

            {formData.education &&
            formData.education.some((edu) => edu.college) ? (
              <View style={styles.section}>
                <Text style={styles.header}>Education:</Text>
                {formData.education.map(
                  (edu, index) =>
                    edu.college && (
                      <View key={index} style={styles.subSection}>
                        <Text style={styles.subHeader}>{edu.college}</Text>
                        <Text style={styles.text}>
                          {edu.course} ({edu.startYear} - {edu.endYear})
                        </Text>
                        <Text style={styles.text}>GPA: {edu.gpa}</Text>
                      </View>
                    )
                )}
              </View>
            ) : null}

            {formData.experience &&
            formData.experience.some((exp) => exp.company) ? (
              <View style={styles.section}>
                <Text style={styles.header}>Experience:</Text>
                {formData.experience.map(
                  (exp, index) =>
                    exp.company && (
                      <View key={index} style={styles.subSection}>
                        <Text style={styles.subHeader}>{exp.company}</Text>
                        <Text style={styles.text}>
                          {exp.field}, {exp.years} years
                        </Text>
                      </View>
                    )
                )}
              </View>
            ) : null}
          </View>

          <View style={styles.smallSection}>
            {formData.projects &&
            formData.projects.some((proj) => proj.name) ? (
              <View style={styles.section}>
                <Text style={styles.header}>Projects:</Text>
                {formData.projects.map(
                  (proj, index) =>
                    proj.name && (
                      <View key={index} style={styles.subSection}>
                        <Text style={styles.subHeader}>{proj.name}</Text>
                        <Text style={styles.text}>About: {proj.about}</Text>
                        <Text style={styles.text}>Time: {proj.time}</Text>
                        <Text style={styles.text}>
                          Skills Used: {proj.skillsUsed.join(", ")}
                        </Text>
                      </View>
                    )
                )}
              </View>
            ) : null}

            {formData.skills &&
            formData.skills.length > 0 &&
            formData.skills[0] !== "" ? (
              <View style={styles.section}>
                <Text style={styles.header}>Skills:</Text>
                <View style={styles.subSection}>
                  <Text style={styles.text}>{formData.skills.join(", ")}</Text>
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </Page>
    </Document>
  );
};
