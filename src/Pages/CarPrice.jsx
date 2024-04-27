import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function CarPrice() {
  const [imageFile, setImageFile] = useState(null);
  const [imageOutput, setImageOutput] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);

      // Save the image locally
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        // Do something with the base64 string if needed
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imageFile) {
      // Process the image here and store its output
      const outputString = `Image uploaded: ${imageFile.name}`;
      setImageOutput(outputString);
    }
  };

  return (
    <>
    <Navbar/>
     <br/>
     <br/>
     <br/>
     <br/>

    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form className="py-6 px-9" onSubmit={handleSubmit}>
          

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">Upload Image</label>

            <div className="mb-8">
              <input
                type="file"
                name="file"
                id="file"
                className="sr-only"
                accept="image/*"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">Drop image here</span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div>
            <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Send Image
            </button>
          </div>
        </form>

        {/* Display the image output */}
        {imageOutput && (
          <div className="mt-8">
            <p className="text-lg font-semibold text-[#07074D]">Image Output:</p>
            <p className="mt-2 text-[#6B7280]">{imageOutput}</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default CarPrice;
