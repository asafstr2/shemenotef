import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const BlogMainSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  width: "100%",
  margin: theme.spacing(2),
  background: "white",
  paddingBlock: theme.spacing(12),
}));

const BlogSection = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(4),
  margin: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const BlogItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
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
  backgroundColor: theme.palette.primary.light,
}));

const assets = [
  {
    title: "איך להכין מרכך בבית מ2 מרכיבים בלבד",
    image:
      "https://static1.s123-cdn-static-a.com/uploads/7229067/400_642c29bc3c01b.jpg",
    subtext: "Subtext",
  },
  {
    title: "איך להכין מרכך בבית מ2 מרכיבים בלבד",
    image:
      "https://static1.s123-cdn-static-a.com/uploads/7229067/400_642c29bc3c01b.jpg",
    subtext: "Subtext",
  },
  {
    title: "איך להכין מרכך בבית מ2 מרכיבים בלבד",
    image:
      "https://static1.s123-cdn-static-a.com/uploads/7229067/400_642c29bc3c01b.jpg",
    subtext: "Subtext",
  },
];
const Blogs = (): JSX.Element => (
  <BlogSection>
    {assets.map(({ title, image, subtext }) => (
      <NavLink
        to={`/blogs/${title}`}
        state={{ props: { title, image, subtext } }}
      >
        <BlogItem>
          <Avatar sx={{ width: 150, height: 150 }} alt="Avatar" src={image} />
          <Typography variant="h5" align="center">
            {title}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {subtext}
          </Typography>
        </BlogItem>
      </NavLink>
    ))}
  </BlogSection>
);
const MyBlogSection = () => {
  return (
    <BlogMainSection>
      <StyledTitle>הבלוג שלי</StyledTitle>
      <StyledDivider />
      <Blogs />
    </BlogMainSection>
  );
};

export default MyBlogSection;
