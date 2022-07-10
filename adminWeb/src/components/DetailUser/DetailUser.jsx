import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./DetailUser.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";

export const defaultValue = {

}

function DetailUser() {

  return (
   
    <main id="content" role="main" className="main">
    {/* Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-sm mb-2 mb-sm-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-no-gutter">
                <li className="breadcrumb-item"><a className="breadcrumb-link" href="ecommerce-customers.html">Khách hàng</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Chi tiết</li>
              </ol>
            </nav>
            <h1 className="page-header-title">Anne Richard</h1>
          </div>
          <div className="col-sm-auto">
            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle mr-1" href="#" data-toggle="tooltip" data-placement="top" title="Khách hàng trước đó">
              <i className="tio-arrow-backward" />
            </a>
            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#" data-toggle="tooltip" data-placement="top" title="Khách hàng tiếp theo">
              <i className="tio-arrow-forward" />
            </a>
          </div>
        </div>
      </div>
      {/* End Page Header */}
      <div className="row">
        <div className="col-lg-8">
          {/* Card */}
          <div className="card mb-3 mb-lg-5">
            {/* Body */}
            <div className="card-body">
              {/* Media */}
              <div className="d-flex align-items-center mb-5">
                <div className="avatar avatar-lg avatar-circle">
                  <img className="avatar-img" src="assets\img\160x160\img9.jpg" alt="Image Description" />
                </div>
                <div className="mx-3">
                  <div className="d-flex mb-1">
                    <h3 className="mb-0 mr-3">Anne Richard</h3>
                    {/* Unfold */}
                    {/* <div class="hs-unfold">
                  <a class="js-hs-unfold-invoker btn btn-icon btn-xs btn-white rounded-circle" href="javascript:;"
                    data-toggle="tooltip" data-placement="top" title="Sửa" data-hs-unfold-options='{
                         "target": "#editDropdown",
                         "type": "css-animation"
                       }'>
                    <i class="tio-edit"></i>
                  </a>

                  <div id="editDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-card mt-1"
                    style="min-width: 20rem;">
                    <div class="card">
                      <div class="card-body">
                        <div class="form-row">
                          <div class="col-sm-6">
                            <label for="firstNameLabel" class="input-label">Tên</label>
                            <input type="text" class="form-control" name="firstName" id="firstNameLabel"
                              placeholder="Clarice" aria-label="Clarice" value="Anna">
                          </div>

                          <div class="col-sm-6">
                            <label for="lastNameLabel" class="input-label">Họ</label>
                            <input type="text" class="form-control" name="lastName" id="lastNameLabel"
                              placeholder="Boone" aria-label="Boone" value="Richard">
                          </div>
                        </div>

                        <div class="d-flex justify-content-end mt-3">
                          <button type="button" class="btn btn-sm btn-white mr-2">Bỏ</button>
                          <button type="button" class="btn btn-sm btn-primary">Lưu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                    {/* End Unfold */}
                  </div>
                </div>
                {/* <div class="d-none d-sm-inline-block ml-auto text-right"> */}
                {/* Unfold */}
                {/* <div class="hs-unfold">
                <a class="js-hs-unfold-invoker btn btn-sm btn-white" href="javascript:;" data-hs-unfold-options='{
                       "target": "#actionsDropdown",
                       "type": "css-animation"
                     }'>
                  Actions <i class="tio-chevron-down"></i>
                </a>

                <div id="actionsDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu mt-1">
                  <a class="dropdown-item" href="#">
                    <i class="tio-email-outlined dropdown-item-icon"></i> Email
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="tio-call dropdown-item-icon"></i> Call
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="tio-sync dropdown-item-icon"></i> Merge
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item text-danger" href="#">
                    <i class="tio-delete-outlined dropdown-item-icon text-danger"></i>
                    Delete
                  </a>
                </div>
              </div> */}
                {/* End Unfold */}
                {/* </div> */}
              </div>
              {/* End Media */}
              {/* <label class="input-label">Customer note</label> */}
              {/* Quill */}
              {/* <div class="quill-custom">
            <div id="toolbar-container">
              <ul class="list-inline ql-toolbar-list">
                <li class="list-inline-item">
                  <button class="ql-bold"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-italic"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-underline"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-strike"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-link"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-image"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-blockquote"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-code"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-list" value="bullet"></button>
                </li>
              </ul>
            </div>

            <div class="js-quill" style="min-height: 10rem;" data-hs-quill-options='{
                      "placeholder": "Start typing to leave a note...",
                      "toolbarBottom": true,
                      "modules": {
                        "toolbar": "#toolbar-container"
                      }
                     }'>
            </div>
          </div> */}
              {/* End Quill */}
            </div>
            {/* Body */}
            {/* Footer */}
            {/* <div class="card-footer">
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-white mr-2">Discard</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </div> */}
            {/* End Footer */}
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="card mb-3 mb-lg-5">
            {/* Header */}
            <div className="card-header">
              <div className="row justify-content-between align-items-center flex-grow-1">
                <div className="col-sm mb-3 mb-sm-0">
                  <h4 className="card-header-title">Các đơn hàng đã đặt</h4>
                </div>
                <div className="col-sm-auto">
                  {/* Nav */}
                  {/* <ul class="js-tabs-to-dropdown nav nav-segment nav-fill nav-sm-down-break"
                data-hs-transform-tabs-to-btn-options='{
                      "transformResolution": "sm",
                      "btnClassNames": "btn btn-block btn-white dropdown-toggle justify-content-center"
                    }'>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Tất cả đơn hàng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Open</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Unfulfilled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Unpaid</a>
                </li>
              </ul> */}
                  {/* End Nav */}
                  {/* Datatable Info */}
                  <div id="datatableCounterInfo" style={{display: 'none'}}>
                    <div className="d-flex align-items-center">
                      <span className="font-size-sm mr-3">
                        Đã chọn
                        <span id="datatableCounter">0</span>
                        đơn hàng
                      </span>
                      <a className="btn btn-sm btn-outline-danger" href="javascript:;">
                        <i className="tio-delete-outlined" /> Xóa
                      </a>
                    </div>
                  </div>
                  {/* End Datatable Info */}
                </div>
              </div>
              {/* End Row */}
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="card-body">
              {/* Input Group */}
              <div className="input-group input-group-merge">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="tio-search" />
                  </span>
                </div>
                <input id="datatableSearch" type="search" className="form-control" placeholder="Tìm đơn hàng" aria-label="Search orders" />
              </div>
              {/* End Input Group */}
            </div>
            {/* End Body */}
            {/* Table */}
            <div className="table-responsive datatable-custom">
              <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                     &quot;columnDefs&quot;: [{
                        &quot;targets&quot;: [0, 5],
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
                    <th className="table-column-pl-0">Đơn hàng</th>
                    <th>Ngày đặt</th>
                    <th>Trạng thái thanh toán</th>
                    <th>Tổng tiền</th>
                    <th>Hóa đơn</th>
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
                    <td>Aug 17, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$256.39</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Hóa đơn
                      </a>
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
                    <td>Aug 17, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$2,125.00</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>Aug 03, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$532.99</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>July 29, 2020</td>
                    <td>
                      <span className="badge badge-soft-warning">
                        <span className="legend-indicator bg-warning" />Pending
                      </span>
                    </td>
                    <td>$1,035.02</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>July 11, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$68.53</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>July 04, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$100.00</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>June 27, 2020</td>
                    <td>
                      <span className="badge badge-soft-warning">
                        <span className="legend-indicator bg-warning" />Pending
                      </span>
                    </td>
                    <td className="text-danger">$89.46</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>June 15, 2020</td>
                    <td>
                      <span className="badge badge-soft-warning">
                        <span className="legend-indicator bg-warning" />Pending
                      </span>
                    </td>
                    <td className="text-danger">$3,535.46</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>June 12, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$23.89</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>June 02, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$77.00</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>May 30, 2020</td>
                    <td>
                      <span className="badge badge-soft-warning">
                        <span className="legend-indicator bg-warning" />Pending
                      </span>
                    </td>
                    <td className="text-danger">$77.00</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>May 25, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$1,421.47</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <td>May 16, 2020</td>
                    <td>
                      <span className="badge badge-soft-success">
                        <span className="legend-indicator bg-success" />Paid
                      </span>
                    </td>
                    <td>$45.00</td>
                    <td>
                      <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                        <i className="tio-receipt-outlined mr-1" /> Invoice
                      </a>
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
                    <span className="mr-2">Hiển thị </span>
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
                    <span className="text-secondary mr-2">đơn hàng trong tổng </span>
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
          {/* Card - Timeline */}
          {/* End Card - Timeline */}
          <div className="d-none d-lg-block">
            <button type="button" className="btn btn-danger">Xóa khách hàng</button>
            <button type="button" className="btn btn-primary">Tạm ngưng hoạt động</button>
          </div>
        </div>
        <div className="col-lg-4">
          {/* Card */}
          <div className="card mb-3 mb-lg-5">
            {/* Body */}
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Thông tin liên lạc</h5>
                {/* <a class="link" href="javascript:;">Edit</a> */}
              </div>
              <ul className="list-unstyled list-unstyled-py-2">
                <li>
                  <i className="tio-online mr-2" />
                  anne@example.com
                </li>
                <li>
                  <i className="tio-android-phone-vs mr-2" />
                  +1 (609) 972-22-22
                </li>
              </ul>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5>Địa chỉ</h5>
                {/* <a class="link" href="javascript:;">Edit</a> */}
              </div>
              {/* Leaflet (Map) */}
              <div id="map" className="leaflet-custom rounded mt-1 mb-3" style={{minHeight: '10rem'}} data-hs-leaflet-options="{
                   &quot;map&quot;: {
                     &quot;scrollWheelZoom&quot;: false,
                     &quot;coords&quot;: [37.4040344, -122.0289704]
                   },
                   &quot;marker&quot;: [
                     {
                       &quot;coords&quot;: [10.815209, 106.680773],
                       &quot;icon&quot;: {
                         &quot;iconUrl&quot;: &quot;./assets/svg/components/map-pin.svg&quot;,
                         &quot;iconSize&quot;: [50, 45]
                       },
                       &quot;popup&quot;: {
                         &quot;text&quot;: &quot;153 Williamson Plaza, Maggieberg&quot;
                       }
                     }
                   ]
                  }" />
              {/* End Leaflet (Map) */}
              <span className="d-block">
                45 Phạm Văn Đồng<br />
                Phường 3<br />
                Quận Gò Vấp, Thành Phố Hồ Chí Minh.<br />
                {/* <img class="avatar avatar-xss avatar-circle ml-1" src="assets\vendor\flag-icon-css\flags\1x1\gb.svg"
              alt="Great Britain Flag"> */}
              </span>
              <hr />
              {/* <div class="d-flex justify-content-between align-items-center">
            <h5>Billing address</h5>
            <a class="link" href="javascript:;">Edit</a>
          </div>

          <span class="d-block">
            45 Roker Terrace<br>
            Latheronwheel<br>
            KW5 8NW, London<br>
            UK <img class="avatar avatar-xss avatar-circle ml-1" src="assets\vendor\flag-icon-css\flags\1x1\gb.svg"
              alt="Great Britain Flag">
          </span> */}
              <div className="mt-3">
                <h5 className="mb-0">Thẻ thanh toán</h5>
                <span className="d-block">Số thẻ: ************4291</span>
              </div>
              <hr />
              <div className="mt-3">
                <h5 className="mb-0">Số ngày thanh toán</h5>
                <span className="d-block">Aug 17, 2020, 5:48 (ET)</span>
              </div>
            </div>
            {/* End Body */}
          </div>
          {/* End Card */}
          {/* Card */}
          {/* End Card */}
        </div>
      </div>
      {/* End Row */}
      <div className="d-lg-none">
        <button type="button" className="btn btn-danger">Xóa khách hàng</button>
      </div>
    </div>
    {/* End Content */}
    {/* Footer */}
    {/* End Footer */}
  </main>
        );
      }

export default DetailUser;