const axios = require('axios');
const fs = require('fs');

const uploadFile = async (filePath, fileName, licenseKey) => {
   try {
      const fileData = fs.readFileSync(filePath);
      const response = await axios.post('https://www.lalal.ai/api/upload/', fileData, {
         headers: {
            'Content-Disposition': `attachment; filename=${fileName}`,
            'Authorization': `license ${licenseKey}`
         }
      });
      return response.data;
   } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
   }
};

const splitFile = async (fileId, licenseKey, params) => {
   try {
      const response = await axios.post('https://www.lalal.ai/api/split/', `params=${JSON.stringify(params)}`, {
         headers: {
            'Authorization': `license ${licenseKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      });
      return response.data;
   } catch (error) {
      console.error('Error splitting file:', error);
      throw error;
   }
};

const cancelTask = async (fileIds, licenseKey) => {
   try {
      const response = await axios.post('https://www.lalal.ai/api/cancel/', `id=${fileIds}`, {
         headers: {
            'Authorization': `license ${licenseKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      });
      return response.data;
   } catch (error) {
      console.error('Error canceling task:', error);
      throw error;
   }
};

const checkFileStatus = async (fileIds, licenseKey) => {
   try {
      const response = await axios.post('https://www.lalal.ai/api/check/', `id=${fileIds}`, {
         headers: {
            'Authorization': `license ${licenseKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      });
      return response.data;
   } catch (error) {
      console.error('Error checking file status:', error);
      throw error;
   }
};

const getUserLimits = async (licenseKey) => {
   try {
      const response = await axios.get(`https://www.lalal.ai/billing/get-limits/?key=${licenseKey}`);
      return response.data;
   } catch (error) {
      console.error('Error getting user limits:', error);
      throw error;
   }
};

module.exports = {
   uploadFile,
   splitFile,
   cancelTask,
   checkFileStatus,
   getUserLimits,
};