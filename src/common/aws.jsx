import axios from "axios";

export const uploadImage = async (img) => {
  let imgUrl = null;

  const formData = new FormData();
  formData.append("image", img);

  await axios({
    method: "POST",
    url: import.meta.env.VITE_SERVER_DOMAIN + "/upload-image",
    headers: { "Content-Type": "multipart/form-data" },
    data: formData,
  })
    .then(({ data }) => {
      imgUrl = data.imageUrl;
    })
    .catch((error) => {
      console.error("Error uploading image to Cloudinary:", error);
    });

  return imgUrl;
};
