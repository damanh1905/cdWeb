import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.scss";
function ProductItem({ data }) {
  return (
    <Link to={{ pathname: `/${data.id}` }} className={styles["wrapper"]}>
      <img
        className={styles["avatar"]}
        src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
        alt="Hoaa"
      />
      <div className={styles["info"]}>
        <h4 className={styles["name"]}>
          <span>
            {" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(data.price)}
          </span>
          {data.new && (
            <FontAwesomeIcon className={styles["check"]} icon={faCheckCircle} />
          )}
        </h4>
        <span className={styles["username"]}>{data.name}</span>
      </div>
    </Link>
  );
}

export default ProductItem;