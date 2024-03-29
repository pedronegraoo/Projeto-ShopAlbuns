import albumsDB from "../database/albums.json";
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

function Provider({ children }) {
  const [storeAlbum, setStoreAlbum] = useState(() => {
    const store = localStorage.getItem("StoreAlbum");

    if (!store) return [];
    return JSON.parse(store);
  });

  const [priceTotal, setPriceTotal] = useState(() => {
    const storePrice = localStorage.getItem("ValueTotal");

    if (!storePrice) return [];
    return JSON.parse(storePrice);
  });

  const [uploadedImage, setUploadedImage] = useState(true);
  const [visible, setVisible] = useState(false);

  function addAlbumInStore(album) {
    const store = album;

    setStoreAlbum((state) => {
      const newState = [store, ...state];

      const map = new Map();
      newState.map((album) => {
        map.set(album.id, album);
      });
      const excludingRepeated = Array.from(map.values());

      // console.log(excludingRepeated);

      localStorage.setItem("StoreAlbum", JSON.stringify(excludingRepeated));
      return excludingRepeated;
    });
  }

  function removeAlbumInStore(id) {
    setStoreAlbum((state) => {
      const newState = state.filter((item) => item.id !== id);

      localStorage.setItem("StoreAlbum", JSON.stringify(newState));
      return newState;
    });

    totalSum();
  }

  function getAlbum(id) {
    return albumsDB.find((album) => album.id === +id);
  }

  function getAllAlbunsArtist(id) {
    return albumsDB.filter((album) => album.artist === id);
  }

  function plusQuantity(album) {
    album.quantity += 1;

    setStoreAlbum((state) => {
      const newState = state.map((item) => {
        if (item.id === album.id) {
          item.quantity = album.quantity;
        }
        return item;
      });

      localStorage.setItem("StoreAlbum", JSON.stringify(newState));
      return newState;
    });
  }

  function minusQuantity(album) {
    album.quantity -= 1;

    setStoreAlbum((state) => {
      const newState = state.filter((item) => {
        if (item.id === album.id) {
          item.quantity = album.quantity;
        }
        return item;
      });
      localStorage.setItem("StoreAlbum", JSON.stringify(newState));
      return newState;
    });
  }

  function calculate(total, item) {
    return total + item.price * item.quantity;
  }

  function totalSum() {
    setStoreAlbum((state) => {
      setPriceTotal((calc) => {
        calc = state.reduce(calculate, 0);
        localStorage.setItem("ValueTotal", JSON.stringify(calc));
        return calc;
      });

      localStorage.setItem("StoreAlbum", JSON.stringify(state));
      return state;
    });
  }

  function finishBuy() {
    setStoreAlbum((state) => {
      state.splice(0);
      totalSum();
      localStorage.setItem("StoreAlbum", JSON.stringify(state));
      return state;
    });
  }

  function descontoCupom(value) {
    setPriceTotal((state) => {
      const newState = (state - state * value).toFixed(2);
      localStorage.setItem("ValueTotal", JSON.stringify(newState));
      console.log(newState);
      return newState;
    });
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const value = {
    storeAlbum,
    addAlbumInStore,
    removeAlbumInStore,
    plusQuantity,
    minusQuantity,
    totalSum,
    priceTotal,
    finishBuy,
    getAlbum,
    getAllAlbunsArtist,
    descontoCupom,
    uploadedImage,
    setUploadedImage,
    scrollTop,
    visible,
    setVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
