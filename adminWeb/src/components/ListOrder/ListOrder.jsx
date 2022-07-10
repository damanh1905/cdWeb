import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./ListOrder.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";

export const defaultValue = {

}

function ListOrder() {

  return (
   
    <main id="content" role="main" className="main">
    {/* Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center mb-3">
          <div className="col-sm">
            <h1 className="page-header-title">Orders <span className="badge badge-soft-dark ml-2">106,905</span></h1>
            <div className="mt-2">
              <a className="text-body mr-3" href="javascript:;" data-toggle="modal" data-target="#exportOrdersModal">
                <i className="tio-download-to mr-1" /> Export
              </a>
              {/* Unfold */}
              <div className="hs-unfold">
                <a className="js-hs-unfold-invoker text-body" href="javascript:;" data-hs-unfold-options="{
                   &quot;target&quot;: &quot;#moreOptionsDropdown&quot;,
                   &quot;type&quot;: &quot;css-animation&quot;
                 }">
                  More options <i className="tio-chevron-down" />
                </a>
                <div id="moreOptionsDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu mt-1">
                  <a className="dropdown-item" href="#">
                    <i className="tio-folder-add dropdown-item-icon" /> New order
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="tio-folder dropdown-item-icon" /> New order - Development
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="tio-folder dropdown-item-icon" /> New order - Staging
                  </a>
                </div>
              </div>
              {/* End Unfold */}
            </div>
          </div>
        </div>
        {/* End Row */}
        {/* Nav Scroller */}
        <div className="js-nav-scroller hs-nav-scroller-horizontal">
          <span className="hs-nav-scroller-arrow-prev" style={{display: 'none'}}>
            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
              <i className="tio-chevron-left" />
            </a>
          </span>
          <span className="hs-nav-scroller-arrow-next" style={{display: 'none'}}>
            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
              <i className="tio-chevron-right" />
            </a>
          </span>
          {/* Nav */}
          <ul className="nav nav-tabs page-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">All products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Open</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Unfulfilled</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Unpaid</a>
            </li>
          </ul>
          {/* End Nav */}
        </div>
        {/* End Nav Scroller */}
      </div>
      {/* End Page Header */}
      {/* Card */}
      <div className="card">
        {/* Header */}
        <div className="card-header">
          <div className="row justify-content-between align-items-center flex-grow-1">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <form>
                {/* Search */}
                <div className="input-group input-group-merge input-group-flush">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="tio-search" />
                    </div>
                  </div>
                  <input id="datatableSearch" type="search" className="form-control" placeholder="Search orders" aria-label="Search orders" />
                </div>
                {/* End Search */}
              </form>
            </div>
            <div className="col-lg-6">
              <div className="d-sm-flex justify-content-sm-end align-items-sm-center">
                {/* Datatable Info */}
                <div id="datatableCounterInfo" className="mr-2 mb-2 mb-sm-0" style={{display: 'none'}}>
                  <div className="d-flex align-items-center">
                    <span className="font-size-sm mr-3">
                      <span id="datatableCounter">0</span>
                      Selected
                    </span>
                    <a className="btn btn-sm btn-outline-danger" href="javascript:;">
                      <i className="tio-delete-outlined" /> Delete
                    </a>
                  </div>
                </div>
                {/* End Datatable Info */}
                {/* Unfold */}
                <div className="hs-unfold mr-2">
                  <a className="js-hs-unfold-invoker btn btn-sm btn-white dropdown-toggle" href="javascript:;" data-hs-unfold-options="{
                     &quot;target&quot;: &quot;#usersExportDropdown&quot;,
                     &quot;type&quot;: &quot;css-animation&quot;
                   }">
                    <i className="tio-download-to mr-1" /> Export
                  </a>
                  <div id="usersExportDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-sm-right">
                    <span className="dropdown-header">Options</span>
                    <a id="export-copy" className="dropdown-item" href="javascript:;">
                      <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                      Copy
                    </a>
                    <a id="export-print" className="dropdown-item" href="javascript:;">
                      <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                      Print
                    </a>
                    <div className="dropdown-divider" />
                    <span className="dropdown-header">Download options</span>
                    <a id="export-excel" className="dropdown-item" href="javascript:;">
                      <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                      Excel
                    </a>
                    <a id="export-csv" className="dropdown-item" href="javascript:;">
                      <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                      .CSV
                    </a>
                    <a id="export-pdf" className="dropdown-item" href="javascript:;">
                      <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                      PDF
                    </a>
                  </div>
                </div>
                {/* End Unfold */}
                {/* Unfold */}
                <div className="hs-unfold">
                  <a className="js-hs-unfold-invoker btn btn-sm btn-white" href="javascript:;" data-hs-unfold-options="{
                     &quot;target&quot;: &quot;#showHideDropdown&quot;,
                     &quot;type&quot;: &quot;css-animation&quot;
                   }">
                    <i className="tio-table mr-1" /> Columns <span className="badge badge-soft-dark rounded-circle ml-1">7</span>
                  </a>
                  <div id="showHideDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card" style={{width: '15rem'}}>
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Order</span>
                          {/* Checkbox Switch */}
                          <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_order">
                            <input type="checkbox" className="toggle-switch-input" id="toggleColumn_order" defaultChecked />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Date</span>
                          {/* Checkbox Switch */}
                          <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_date">
                            <input type="checkbox" className="toggle-switch-input" id="toggleColumn_date" defaultChecked />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Customer</span>
                          {/* Checkbox Switch */}
                          <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_customer">
                            <input type="checkbox" className="toggle-switch-input" id="toggleColumn_customer" defaultChecked />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Payment status</span>
                          {/* Checkbox Switch */}
                          <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_payment_status">
                            <input type="checkbox" className="toggle-switch-input" id="toggleColumn_payment_status" defaultChecked />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Fulfillment status</span>
                          {/* Checkbox Switch */}
                          <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_fulfillment_status">
                            <input type="checkbox" className="toggle-switch-input" id="toggleColumn_fulfillment_status" />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Payment method</span>
                          {/* Checkbox Switch */}
                          <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_payment_method">
                            <input type="checkbox" className="toggle-switch-input" id="toggleColumn_payment_method" defaultChecked />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Total</span>
                          {/* Checkbox Switch */}
                          <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_total">
                            <input type="checkbox" className="toggle-switch-input" id="toggleColumn_total" defaultChecked />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="mr-2">Actions</span>
                          {/* Checkbox Switch */}
                          <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_actions">
                            <input type="checkbox" className="toggle-switch-input" id="toggleColumn_actions" defaultChecked />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Unfold */}
              </div>
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Header */}
        {/* Table */}
        <div className="table-responsive datatable-custom">
          <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table" style={{width: '100%'}} data-hs-datatables-options="{
                 &quot;columnDefs&quot;: [{
                    &quot;targets&quot;: [0],
                    &quot;orderable&quot;: false
                  }],
                 &quot;order&quot;: [],
                 &quot;info&quot;: {
                   &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                 },
                 &quot;search&quot;: &quot;#datatableSearch&quot;,
                 &quot;entries&quot;: &quot;#datatableEntries&quot;,
                 &quot;pageLength&quot;: 12,
                 &quot;isResponsive&quot;: false,
                 &quot;isShowPaging&quot;: false,
                 &quot;pagination&quot;: &quot;datatablePagination&quot;
               }">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input id="datatableCheckAll" type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="datatableCheckAll" />
                  </div>
                </th>
                <th className="table-column-pl-0">Order</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payment status</th>
                <th>Fulfillment status</th>
                <th>Payment method</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck1" />
                    <label className="custom-control-label" htmlFor="ordersCheck1" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#35463</a>
                </td>
                <td>Aug 17, 2020, 5:48 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Jase Marley</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 4242</span>
                  </div>
                </td>
                <td>$256.39</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown1&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown1" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck2" />
                    <label className="custom-control-label" htmlFor="ordersCheck2" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#23513</a>
                </td>
                <td>Aug 17, 2020, 2:01 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Mathew Gustaffson</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 2390</span>
                  </div>
                </td>
                <td>$2,125.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown2&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown2" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck3" />
                    <label className="custom-control-label" htmlFor="ordersCheck3" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#62311</a>
                </td>
                <td>Aug 17, 2020, 1:55 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Mathew Gustaffson</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td>$532.99</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown3&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown3" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck4" />
                    <label className="custom-control-label" htmlFor="ordersCheck4" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#12453</a>
                </td>
                <td>Aug 17, 2020, 1:54 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Nicky Olvsson</a>
                </td>
                <td>
                  <span className="badge badge-soft-warning">
                    <span className="legend-indicator bg-warning" />Pending
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 3535</span>
                  </div>
                </td>
                <td>$1,035.02</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown4&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown4" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck5" />
                    <label className="custom-control-label" htmlFor="ordersCheck5" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#84223</a>
                </td>
                <td>Aug 17, 2020, 1:04 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">David Nunez</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td>$68.53</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown5&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown5" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck6" />
                    <label className="custom-control-label" htmlFor="ordersCheck6" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#46542</a>
                </td>
                <td>Aug 17, 2020, 1:01 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Brian Jackson</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td>$100.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown6&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown6" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck7" />
                    <label className="custom-control-label" htmlFor="ordersCheck7" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="text-danger" href="ecommerce-order-details.html">#35378</a>
                  <i className="tio-warning text-warning" />
                </td>
                <td>Aug 17, 2020, 12:56 (ET)</td>
                <td className="text-danger">No customer</td>
                <td>
                  <span className="badge badge-soft-warning">
                    <span className="legend-indicator bg-warning" />Pending
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 9901</span>
                  </div>
                </td>
                <td className="text-danger">$89.46</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown7&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown7" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck8" />
                    <label className="custom-control-label" htmlFor="ordersCheck8" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="text-danger" href="ecommerce-order-details.html">#24562</a>
                  <i className="tio-warning text-warning" />
                </td>
                <td>Aug 17, 2020, 12:54 (ET)</td>
                <td className="text-danger">No customer</td>
                <td>
                  <span className="badge badge-soft-warning">
                    <span className="legend-indicator bg-warning" />Pending
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 2278</span>
                  </div>
                </td>
                <td className="text-danger">$3,535.46</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown8&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown8" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck9" />
                    <label className="custom-control-label" htmlFor="ordersCheck9" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#78531</a>
                </td>
                <td>Aug 17, 2020, 12:48 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Mathew Gustaffson</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td>$23.89</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown9&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown9" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck10" />
                    <label className="custom-control-label" htmlFor="ordersCheck10" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#34634</a>
                </td>
                <td>Aug 17, 2020, 12:41 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Jase Marley</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td>$77.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown10&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown10" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck11" />
                    <label className="custom-control-label" htmlFor="ordersCheck11" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="text-danger" href="ecommerce-order-details.html">#93817</a>
                  <i className="tio-warning text-warning" />
                </td>
                <td>Aug 17, 2020, 12:36 (ET)</td>
                <td><a className="text-danger" href="ecommerce-customer-details.html">Jase Marley</a></td>
                <td>
                  <span className="badge badge-soft-warning">
                    <span className="legend-indicator bg-warning" />Pending
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td className="text-danger">$77.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown11&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown11" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck12" />
                    <label className="custom-control-label" htmlFor="ordersCheck12" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#43113</a>
                </td>
                <td>Aug 17, 2020, 12:25 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Jacky Ferguson</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 5533</span>
                  </div>
                </td>
                <td>$1,421.47</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown12&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown12" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck13" />
                    <label className="custom-control-label" htmlFor="ordersCheck13" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#12412</a>
                </td>
                <td>Aug 16, 2020, 4:31 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Brian Jackson</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 4440</span>
                  </div>
                </td>
                <td>$45.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown13&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown13" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck14" />
                    <label className="custom-control-label" htmlFor="ordersCheck14" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="text-danger" href="ecommerce-order-details.html">#92271</a>
                  <i className="tio-warning text-warning" />
                </td>
                <td>Aug 16, 2020, 3:26 (ET)</td>
                <td><a className="text-danger" href="ecommerce-customer-details.html">Kamilia Williams</a></td>
                <td>
                  <span className="badge badge-soft-warning">
                    <span className="legend-indicator bg-warning" />Pending
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 6182</span>
                  </div>
                </td>
                <td className="text-danger">$2,577.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown14&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown14" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck15" />
                    <label className="custom-control-label" htmlFor="ordersCheck15" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="text-danger" href="ecommerce-order-details.html">#62555</a>
                  <i className="tio-warning text-warning" />
                </td>
                <td>Aug 16, 2020, 2:54 (ET)</td>
                <td className="text-danger">No customer</td>
                <td>
                  <span className="badge badge-soft-warning">
                    <span className="legend-indicator bg-warning" />Pending
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td className="text-danger">$63.46</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown15&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown15" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck16" />
                    <label className="custom-control-label" htmlFor="ordersCheck16" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#35331</a>
                </td>
                <td>Aug 16, 2020, 2:48 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Victoria Vicky</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td>$4,639.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown16&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown16" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck17" />
                    <label className="custom-control-label" htmlFor="ordersCheck17" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#45321</a>
                </td>
                <td>Aug 16, 2020, 2:40 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Anna Alexsandrova</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\paypal-icon.svg" alt="Image Description" />
                    <span className="text-dark">••••@gmail.com</span>
                  </div>
                </td>
                <td>$5,253.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown17&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown17" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck18" />
                    <label className="custom-control-label" htmlFor="ordersCheck18" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#23541</a>
                </td>
                <td>Aug 16, 2020, 1:59 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Max Norway</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 3091</span>
                  </div>
                </td>
                <td>$499.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown18&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown18" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck19" />
                    <label className="custom-control-label" htmlFor="ordersCheck19" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#68681</a>
                </td>
                <td>Aug 16, 2020, 1:55 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Williams Tonston</a>
                </td>
                <td>
                  <span className="badge badge-soft-success">
                    <span className="legend-indicator bg-success" />Paid
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-info">
                    <span className="legend-indicator bg-info" />Fulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 8837</span>
                  </div>
                </td>
                <td>$171.00</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown19&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown19" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ordersCheck20" />
                    <label className="custom-control-label" htmlFor="ordersCheck20" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a href="ecommerce-order-details.html">#78323</a>
                </td>
                <td>Aug 16, 2020, 1:15 (ET)</td>
                <td>
                  <a className="text-body" href="ecommerce-customer-details.html">Victor Martinov</a>
                </td>
                <td>
                  <span className="badge badge-soft-warning">
                    <span className="legend-indicator bg-warning" />Pending
                  </span>
                </td>
                <td>
                  <span className="badge badge-soft-dark">
                    <span className="legend-indicator bg-dark" />Unfulfilled
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\mastercard.svg" alt="Image Description" />
                    <span className="text-dark">•••• 3566</span>
                  </div>
                </td>
                <td>$348.55</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                      <i className="tio-visible-outlined" /> View
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#ordersExportDropdown20&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="ordersExportDropdown20" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-copy dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                          Copy
                        </a>
                        <a className="js-export-print dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                          Print
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Download options</span>
                        <a className="js-export-excel dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                          Excel
                        </a>
                        <a className="js-export-csv dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                          .CSV
                        </a>
                        <a className="js-export-pdf dropdown-item" href="javascript:;">
                          <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                          PDF
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End Table */}
        {/* Footer */}
        <div className="card-footer">
          {/* Pagination */}
          <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
            <div className="col-sm mb-2 mb-sm-0">
              <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                <span className="mr-2">Showing:</span>
                {/* Select */}
                <select id="datatableEntries" className="js-select2-custom" data-hs-select2-options="{
                        &quot;minimumResultsForSearch&quot;: &quot;Infinity&quot;,
                        &quot;customClass&quot;: &quot;custom-select custom-select-sm custom-select-borderless&quot;,
                        &quot;dropdownAutoWidth&quot;: true,
                        &quot;width&quot;: true
                      }">
                  <option value={12} selected>12</option>
                  <option value={14}>14</option>
                  <option value={16}>16</option>
                  <option value={18}>18</option>
                </select>
                {/* End Select */}
                <span className="text-secondary mr-2">of</span>
                {/* Pagination Quantity */}
                <span id="datatableWithPaginationInfoTotalQty" />
              </div>
            </div>
            <div className="col-sm-auto">
              <div className="d-flex justify-content-center justify-content-sm-end">
                {/* Pagination */}
                <nav id="datatablePagination" aria-label="Activity pagination" />
              </div>
            </div>
          </div>
          {/* End Pagination */}
        </div>
        {/* End Footer */}
      </div>
      {/* End Card */}
    </div>
    {/* End Content */}
    {/* Footer */}
    <div className="footer">
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <p className="font-size-sm mb-0">© Front. <span className="d-none d-sm-inline-block">2020 Htmlstream.</span></p>
        </div>
        <div className="col-auto">
          <div className="d-flex justify-content-end">
            {/* List Dot */}
            <ul className="list-inline list-separator">
              <li className="list-inline-item">
                <a className="list-separator-link" href="#">FAQ</a>
              </li>
              <li className="list-inline-item">
                <a className="list-separator-link" href="#">License</a>
              </li>
              <li className="list-inline-item">
                {/* Keyboard Shortcuts Toggle */}
                <div className="hs-unfold">
                  <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="javascript:;" data-hs-unfold-options="{
                          &quot;target&quot;: &quot;#keyboardShortcutsSidebar&quot;,
                          &quot;type&quot;: &quot;css-animation&quot;,
                          &quot;animationIn&quot;: &quot;fadeInRight&quot;,
                          &quot;animationOut&quot;: &quot;fadeOutRight&quot;,
                          &quot;hasOverlay&quot;: true,
                          &quot;smartPositionOff&quot;: true
                         }">
                    <i className="tio-command-key" />
                  </a>
                </div>
                {/* End Keyboard Shortcuts Toggle */}
              </li>
            </ul>
            {/* End List Dot */}
          </div>
        </div>
      </div>
    </div>
    {/* End Footer */}
  </main>
  
        );
      }

export default ListOrder;