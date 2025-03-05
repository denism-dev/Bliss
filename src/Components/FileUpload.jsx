import React from 'react';

const FileUpload = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f9fc',
        padding: '2rem',
      }}
    >
      {/* Form */}
      <form
        style={{
          boxShadow: '0 10px 60px rgb(218, 229, 255)',
          border: '1px solid rgb(159, 159, 160)',
          padding: '2rem 0.7rem 0.7rem 0.7rem',
          textAlign: 'center',
          fontSize: '1.125rem',
          maxWidth: '320px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
        }}
      >
        {/* Form Title */}
        <span
          style={{
            color: '#000000',
            fontSize: '1.8rem',
            fontWeight: 500,
          }}
        >
          Upload your file
        </span>

        {/* Form Paragraph */}
        <p
          style={{
            marginTop: '10px',
            fontSize: '0.9375rem',
            color: 'rgb(105, 105, 105)',
          }}
        >
          File should be an image
        </p>

        {/* Drop Container */}
        <label
          style={{
            backgroundColor: '#fff',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            marginTop: '2.1875rem',
            borderRadius: '10px',
            border: '2px dashed rgb(171, 202, 255)',
            color: '#444',
            cursor: 'pointer',
            transition: 'background 0.2s ease-in-out, border 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 140, 255, 0.164)';
            e.currentTarget.style.borderColor = 'rgba(17, 17, 17, 0.616)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.borderColor = 'rgb(171, 202, 255)';
          }}
          htmlFor="file-input"
        >
          <span
            style={{
              color: '#444',
              fontSize: '20px',
              fontWeight: 'bold',
              textAlign: 'center',
              transition: 'color 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#222')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
          >
            Drop files here
          </span>
          or
          <input
            type="file"
            accept="image/*"
            required
            id="file-input"
            style={{
              width: '350px',
              maxWidth: '100%',
              color: '#444',
              padding: '8px',
              background: '#fff',
              borderRadius: '10px',
              border: '1px solid rgba(8, 8, 8, 0.288)',
              marginTop: '10px',
            }}
          />
        </label>
      </form>

      {/* CSS for the file input button */}
      <style>
        {`
          #file-input {
            width: 350px;
            max-width: 100%;
            color: #444;
            padding: 2px;
            background: #fff;
            border-radius: 10px;
            border: 1px solid rgba(8, 8, 8, 0.288);
          }

          #file-input::file-selector-button {
            margin-right: 20px;
            border: none;
            background: #084cdf;
            padding: 10px 20px;
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
            transition: background .2s ease-in-out;
          }

          #file-input::file-selector-button:hover {
            background: #0d45a5;
          }
        `}
      </style>
    </div>
  );
};

export default FileUpload;
