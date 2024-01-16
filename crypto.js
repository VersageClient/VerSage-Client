const crypto = {
    randomBytes: (size) => {
      const bytes = new Uint8Array(size);
      for (let i = 0; i < size; i++) {
        bytes[i] = Math.floor(Math.random() * 256);
      }
      return bytes;
    },
  
    createHash: (algorithm) => {
      const hash = {
        update: (data) => {
          if (typeof data === 'string') {
            data = Buffer.from(data, 'utf-8');
          }
          hash.data = data;
        },
        digest: (encoding) => {
          if (!hash.data) {
            throw new Error('No data to hash. Call update() first.');
          }
          const hashBuffer = new Uint8Array(hash.data.length);
          for (let i = 0; i < hash.data.length; i++) {
            hashBuffer[i] = hash.data[i];
          }
          const digest = Buffer.from(hashBuffer).toString(encoding || 'hex');
          return digest;
        },
      };
      return hash;
    },
  };
  
  module.exports = crypto;
  