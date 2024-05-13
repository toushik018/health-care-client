"use client"

import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import ScheduleModal from './components/ScheduleModal';

const SchedulesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
          <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
          {/* <TextField
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            placeholder="Seach Doctor"
          ></TextField> */}
        </Stack>
        {/* {!isLoading ? (
          <Box>
            <DataGrid rows={doctors} columns={columns} />
          </Box>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        )} */}
        <Box>This is schedule data</Box>
      </Box>
    );
};

export default SchedulesPage;