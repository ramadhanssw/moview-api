import React from "react";
import { shallow } from "enzyme";
import Movie from "./Movie";

describe("Movie Component", () => {
  const movie = {
    title: "Movie 1",
    poster_path: "poster1.jpg",
    release_data: "2022-01-01",
    vote_average: 7.8,
  };

  it("should render Movie Component with props", () => {
    const wrapper = shallow(<Movie movie={movie} />);
    expect(wrapper.find(".Movie-title").text()).toBe(movie.title);
    expect(wrapper.find(".Movie-date").text()).toBe(
      `release date : ${movie.release_data}`
    );
    expect(wrapper.find(".Movie-rate").text()).toBe(`${movie.vote_average}`);
  });

  it("should render image with correct source", () => {
    const wrapper = shallow(<Movie movie={movie} />);
    expect(wrapper.find(".Movie-image").prop("src")).toBe(
      `process.env.REACT_APP_BASEIMGURL/${movie.poster_path}`
    );
  });
});
