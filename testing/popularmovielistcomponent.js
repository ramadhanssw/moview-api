import React from "react";
import { shallow } from "enzyme";
import { getMovieList } from "./api";
import App from "./App";

jest.mock("./api");

describe("PopularMoviesList Component", () => {
  it("should render PopularMoviesList Component with mock data", async () => {
    const movieData = [
      {
        title: "Movie 1",
        poster_path: "poster1.jpg",
        release_data: "2022-01-01",
        vote_average: 7.8,
      },
      {
        title: "Movie 2",
        poster_path: "poster2.jpg",
        release_data: "2022-02-01",
        vote_average: 8.5,
      },
    ];
    getMovieList.mockResolvedValue(movieData);
    const wrapper = shallow(<App />);
    await wrapper.update();
    expect(wrapper.find(".Movie-wrapper")).toHaveLength(2);
  });
});
