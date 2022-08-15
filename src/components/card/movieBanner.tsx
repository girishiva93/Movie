import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import { base_url } from "../../constants/api";

const MovieBanner = (props: any) => {
  let {
    release_date,
    rating,
    title,
    name,
    mediaType,
    poster_path,
    firstAirDate,
  } = props;

  return (
    <>
      <Box sx={{ textAlign: "left" }}>
        <Box>
          <img
            src={base_url + poster_path}
            alt="poster"
            width="auto"
            className="movie__banner"
            height={239}
            style={{ borderRadius: "6px" }}
          />
        </Box>
        <h6
          style={{
            color: "#3D3D52",
            marginTop: "15px",
            marginBottom: "0px",
            width: "180px",
          }}
        >
          {mediaType === "movie"
            ? title
            : mediaType === "tv"
            ? name
            : "no title"}
        </h6>
        <p style={{ color: "#AAAAAA", marginTop: "3px", marginBottom: "4px" }}>
          {mediaType === "movie"
            ? release_date
              ? release_date
              : "Comming Soon!!!"
            : firstAirDate
            ? firstAirDate
            : "Comming Soon!!!"}
        </p>
        <Rating
          name="half-rating-read"
          defaultValue={rating ? rating / 2 || 0 : 0}
          precision={0.5}
          readOnly
          style={{ marginTop: "0px" }}
        />
      </Box>
    </>
  );
};
export default MovieBanner;
