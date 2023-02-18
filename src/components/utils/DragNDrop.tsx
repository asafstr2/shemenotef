import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { masterTheme } from "util/theame";
import CancelIcon from "@mui/icons-material/Cancel";
import { Grow, Typography, IconButton } from "@mui/material";
import { RootState } from "app/store";

// import { mergeClasses } from '@material-ui/styles'

const classes = {
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 3,
  },
  thumb: {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 3,
    marginRight: 8,
    width: 98,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
    position: "relative",
  },
  thumbInner: {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  },
  img: {
    display: "block",
    width: "auto",
    height: "100%",
  },
  changePhotoTitle: {
    color: masterTheme.palette.secondary.main,
    fontWeight: 600,
    cursor: "pointer",
  },
  section: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&  p": {
      fontWeight: 800,
      color: masterTheme.palette.secondary.main,
    },
  },
  closeBtn: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 0,
    zIndex: 1,
  },
};

interface Props {
  noPreview?: boolean;
  files: File[];
  setFiles: (files: never[]) => void;
}
export default function Previews({ noPreview, files, setFiles }: Props) {
  //@ts-ignore
  const focused = useSelector((state: RootState) => state.focused);
  const [p, setP] = useState({
    text: noPreview ? (
      <Typography style={classes.changePhotoTitle}>
        Change Profile Photo
      </Typography>
    ) : (
      "Upload photo"
    ),
  });

  const { getRootProps, getInputProps } = useDropzone({
    //@ts-ignore
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.every((f) => f.size > 6000000)) {
        !noPreview &&
          setP({
            text: "File is too large. Please choose a different one up to 5Mb",
            //@ts-ignore
            style: "red",
          });
        return;
      }
      if (acceptedFiles.length < 4) {
        !noPreview && setP({ text: "Upload photo" });
        setFiles(
          //@ts-ignore
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      } else {
        !noPreview &&
          setP({
            text: "no more then 3 files accepted",
            //@ts-ignore
            style: "red",
          });
      }
    },
  });
  function removeFile(name: string) {
    const newFiles = files.filter((file) => file.name !== name);
    //@ts-ignore
    setFiles(newFiles);
  }

  const thumb = (file: File) => (
    <div
      //@ts-ignore
      style={classes.thumb}
      key={file.name}
    >
      <IconButton
        onClick={() => removeFile(file.name)}
        edge="start"
        //@ts-ignore
        style={classes.closeBtn}
      >
        <CancelIcon />
      </IconButton>
      <div style={classes.thumbInner}>
        <img
          alt="some img"
          //@ts-ignore
          src={file.preview || file}
          style={classes.img}
        />
      </div>
    </div>
  );

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files?.length &&
        //@ts-ignore
        files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const dragZoneStyles = noPreview
    ? {
        position: !noPreview && "absolute",
        top: focused ? "53%" : "20%",
        left: focused ? "59%" : "60%",
        zIndex: 2,
      }
    : {
        //@ts-ignore
        background: masterTheme.palette.grey.light,
        borderRadius: 8,
        border: "1px dashed",
        padding: 30,
        margin: "10px",
        marginTop: masterTheme.spacing(4),
        color: "black",
        height: "80%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
  return (
    <section
      //@ts-ignore
      style={classes.section}
    >
      <div
        {...getRootProps({ className: "dropzone" })}
        //@ts-ignore
        style={dragZoneStyles}
      >
        <input {...getInputProps()} />
        {/* @ts-ignore */}
        <p style={{ color: p.style }}>{p.text}</p>
      </div>
      {noPreview ? null : (
        <aside
          //@ts-ignore
          style={classes.thumbsContainer}
        >
          {files.map((file) => (
            <Grow in={!!file}>{thumb(file)}</Grow>
          ))}
        </aside>
      )}
    </section>
  );
}
