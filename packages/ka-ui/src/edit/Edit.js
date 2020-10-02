import React, { useEffect, useState } from 'react';
import { FormContextProvider, useRouteContext } from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';

import { get } from '../data';

const Edit = (props) => {
  const { children, ...editProps } = props;
  const {
    match: { params },
  } = useRouteContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(get(params.id));
  }, [params]);

  return (
    <FormContextProvider {...editProps} type="edit" record={data}>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Edit #{params.id}</CCardHeader>
            <CCardBody>{children}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </FormContextProvider>
  );
};

export default Edit;
