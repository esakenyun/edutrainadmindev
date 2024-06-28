import { handleAddSubCategory, handleFetchSubCategoryData } from "@/helpers/subCategoryHelper";
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, createFilterOptions } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const filter = createFilterOptions();
export default function InputSubCategoryCreatable({ selectedSubCategories, onSelectSubCategories }) {
  const [value, setValue] = React.useState(selectedSubCategories || null);
  const [open, toggleOpen] = React.useState(false);
  const [subCategoryName, setSubCategoryName] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setDialogValue({
      name: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const newSubCategory = { name: dialogValue.name };

    const response = await handleAddSubCategory(newSubCategory);
    if (response.status === 201) {
      toast.success("Sub Category Added Successfully");
      setValue(newSubCategory);
      setSubCategoryName((prev) => [...prev, newSubCategory]);
      onSelectSubCategories(newSubCategory);
    } else if (response.error) {
      toast.error(response.message);
    }
    setLoading(false);
    handleClose();
  };

  const fetchAllSubCategory = async () => {
    const response = await handleFetchSubCategoryData();
    setSubCategoryName(response);
  };

  useEffect(() => {
    fetchAllSubCategory();
  }, []);

  useEffect(() => {
    setValue(selectedSubCategories);
  }, [selectedSubCategories]);

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
            onSelectSubCategories(newValue || { name: "" });
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={subCategoryName}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => (
          <li {...props} key={option.name}>
            {option.name}
          </li>
        )}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="Sub Category"
            fullWidth
            margin="normal"
            size="small"
            className="mb-4 h-fit rounded-md"
            sx={{
              backgroundColor: "white",

              "& .MuiInputLabel-root.Mui-focused": {
                color: "grey",
              },
            }}
          />
        )}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new Sub Category</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="Name"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

// const subCategoryName = [{ name: "Data Scientist" }, { name: "Machine Learning" }, { name: "Data Analyst" }];
