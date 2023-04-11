import React from "react";
import { Grid } from "@mui/material";

// import { Fade } from "react-reveal";
import { styled } from "@mui/material/styles";

const StyledSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  paddingBlockEnd: theme.spacing(20),
}));

const StyledContainer = styled("div")(({ theme }) => ({
  paddingInline: theme.spacing(38),
  paddingBlockStart: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    paddingInline: theme.spacing(3),
  },
}));

const Logo = styled("div")(({ theme }) => ({
  width: "150px",
  borderRadius: "15px",
  margin: "auto",
  "& img": {
    borderRadius: "15px",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

const StyledTitle = styled("h2")(({ theme }) => ({
  margin: "0 auto",
  fontWeight: "bold",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
  },
}));

const StyledDivider = styled("hr")(({ theme }) => ({
  width: "10%",
  height: "3px",
  margin: "20px auto",
  backgroundColor: theme.palette.secondary.light,
}));

const StyledContent = styled("p")(({ theme }) => ({
  margin: "20px auto 80px auto",
  textAlign: "center",
  fontFamily: "Assistant', sans-serif",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
}));

const AboutSection = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Grid item xs={12} sm={8} md={6}>
          <StyledTitle>אודות</StyledTitle>
          <StyledDivider />
          <StyledContent>
            נעים מאוד קוראים לי תמרה,
            <br />
            אמא לאדם ומאיה המתוקים ונשואה לאסף, שבנה ועיצב לי את האתר הזה :)
            <br />
            <br />
            נולדתי וגדלתי לעולם של המון תרופות סבתא ומילדות ידעתי שלפני שלוקחים
            כדור לכאבי ראש בדוקים למה הכאב ראש הופיע,
            <br />
            ובצורה פשוטה וללא רעלים טופלתי והמשכתי לטפל בעצמי, והיום גם במשפחה
            שלי.
            <br />
            <br />
            המשכתי להעשיר את הידע והלכתי ללמוד ארומתרפיה, ורוקחות טבעית. אני כל
            כך אוהבת את מה שאני עושה ואני לא מתכוונת לעצור - כיום אני לומדת
            נטורופתיה ופרחי באך במכללת רידמן. והעתיד עוד ורוד.
            <br />
            <br />
            אני מאמינה שכולנו יכולים לקחת אחריות על הבריאות שלנו ולטפל נכון
            ובריא יותר בעצמנו ובילדינו, להתחבר למקורות ולטבע העוצמתי והמדהים שיש
            לנו ולמקום הפשוט והטבעי שזמין לכל אחד.
            <br />
            <br />
            היום אני הבעלים של העסק שבניתי בעשר אצבעותיי לאט ובאמונה, באהבה
            ובהתמדה - שמן עוטף מעבירה סדנאות והרצאות בנושא טיפוח בריא, מפתחת
            פורמולות חדשות וטבעיות ברוקחות טבעית ומשתדלת להביא את המיטב שיש לטבע
            לתת.
            <br />
            <br />
            מוזמנות ומוזמנים לעקוב אחרי בערוץ היוטיוב, באינסטגרם ובפייסבוק
            ולגלות יחד איתי את הדרך הטבעית.
            <br />
            <br />
            אוהבת, תמרה.
          </StyledContent>
          <Logo>
            <img
              src="https://static1.s123-cdn-static-a.com/uploads/7229067/400_642c249798e17.jpg"
              alt="profile"
            />
          </Logo>
        </Grid>
      </StyledContainer>
    </StyledSection>
  );
};
export default AboutSection;
