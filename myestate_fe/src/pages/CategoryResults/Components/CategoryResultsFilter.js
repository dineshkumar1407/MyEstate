import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomSlider from '../../../shared/components/FormElements/CustomSlider';
import CustomAutoComplete from '../../../shared/components/FormElements/CustomAutoComplete';
import FormSubmitSection from '../../../shared/components/FormElements/FormSubmitSection';

const cities = ['Chennai', 'Arrakonam', 'Banglore', 'Hyderabad'];
const CatgeoryResultsFilter = ({ price, setPrice, onClear }) => {
  const priceLabelFormat = (value) => {
    if (value === 100000)
      return <div className="cmn_slider_label">1 lakh+</div>;
    return value;
  };

  return (
    <Grid
      className="search_filters"
      style={{ margin: 'auto', borderRadius: 5 }}
    >
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{ width: '95%', margin: 'auto', borderRadius: 5 }}
        spacing={3}
      >
        <Grid item xs={6}>
          <CustomAutoComplete
            name="city"
            id="city"
            label="City"
            defaultValue={[]}
            options={cities}
            multiple
          />
        </Grid>
        <Grid item xs={6}>
          <CustomSlider
            name="price"
            id="price"
            value={price}
            setValue={setPrice}
            minValue={0}
            maxValue={100000}
            formatLabel={priceLabelFormat}
            label="Price"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{ maxWidth: '95%', margin: 'auto', borderRadius: 5 }}
        spacing={3}
      >
        <Grid item xs={6}>
          <CustomAutoComplete
            name="type"
            id="type"
            defaultValue={[]}
            label="Type"
            options={['buy', 'rent']}
            multiple
          />
        </Grid>
        <Grid item xs={2}>
          <FormSubmitSection
            onCancel={onClear}
            submitButtonText="Apply"
            cancelButtonText="clear"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CatgeoryResultsFilter;
