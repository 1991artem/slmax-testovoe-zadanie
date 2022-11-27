import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import SwitchWithIcons from "react-native-switch-with-icons";
import { stylesHeader } from "../style";

interface IHeader {
  setTheme: (value: boolean)=>void;
}

function Header({setTheme}: IHeader) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleSwitch = () => {
    setTheme(!darkMode)
    setDarkMode((prev) => !prev)
  };

  return (
    <View style={stylesHeader.container}>
      <Svg width="393" height="200" viewBox="0 0 393 200" fill="none">
        <Path
          d="M0 0H393V130.315C393 130.315 311.766 128.401 208.5 157.5C79.8313 193.758 0 191.887 0 191.887V0Z"
          fill={darkMode ? "#362693" : "#82C8DE"}
        />
        <Path
          d="M396 0H0V135.744C0 135.744 83.2433 135.744 187.297 166.056C316.948 203.825 396 199.882 396 199.882V0Z"
          fill={darkMode ? "#7363D1" : "#10637D"}
        />
        <Path
          d="M148.148 106.224C146.636 106.224 145.264 105.907 144.032 105.272C142.819 104.637 141.867 103.76 141.176 102.64L143.584 101.156C144.032 101.921 144.639 102.519 145.404 102.948C146.188 103.359 147.084 103.564 148.092 103.564C149.361 103.564 150.332 103.265 151.004 102.668C151.695 102.071 152.04 101.277 152.04 100.288C152.04 99.6533 151.9 99.0933 151.62 98.608C151.34 98.104 150.92 97.7213 150.36 97.46C149.8 97.18 149.119 97.04 148.316 97.04H146.104V94.604H148.316C148.969 94.604 149.52 94.4827 149.968 94.24C150.435 93.9787 150.789 93.6333 151.032 93.204C151.275 92.756 151.396 92.252 151.396 91.692C151.396 91.1133 151.256 90.6093 150.976 90.18C150.715 89.732 150.332 89.3867 149.828 89.144C149.324 88.8827 148.708 88.752 147.98 88.752C146.972 88.752 146.104 88.9573 145.376 89.368C144.667 89.7787 144.107 90.3387 143.696 91.048L141.4 89.452C142.091 88.3693 142.977 87.5107 144.06 86.876C145.161 86.2413 146.515 85.924 148.12 85.924C149.408 85.924 150.519 86.1387 151.452 86.568C152.404 86.9787 153.141 87.5853 153.664 88.388C154.187 89.172 154.448 90.124 154.448 91.244C154.448 92.1773 154.215 93.0547 153.748 93.876C153.3 94.6787 152.6 95.2853 151.648 95.696C152.787 96.0133 153.664 96.6107 154.28 97.488C154.915 98.3653 155.232 99.392 155.232 100.568C155.232 101.763 154.924 102.789 154.308 103.648C153.692 104.488 152.852 105.132 151.788 105.58C150.743 106.009 149.529 106.224 148.148 106.224ZM157.136 101.716C157.136 100.783 157.397 99.9707 157.92 99.28C158.461 98.5707 159.198 98.0293 160.132 97.656C161.065 97.264 162.148 97.068 163.38 97.068C164.033 97.068 164.696 97.1147 165.368 97.208C166.058 97.3013 166.665 97.4507 167.188 97.656V96.732C167.188 95.7053 166.88 94.9027 166.264 94.324C165.648 93.7453 164.761 93.456 163.604 93.456C162.782 93.456 162.008 93.6053 161.28 93.904C160.552 94.184 159.777 94.5853 158.956 95.108L157.92 93.036C158.89 92.3827 159.861 91.8973 160.832 91.58C161.821 91.2627 162.857 91.104 163.94 91.104C165.9 91.104 167.44 91.6267 168.56 92.672C169.698 93.6987 170.268 95.164 170.268 97.068V102.528C170.268 102.883 170.324 103.135 170.436 103.284C170.566 103.433 170.781 103.517 171.08 103.536V106C170.8 106.056 170.548 106.093 170.324 106.112C170.1 106.131 169.913 106.14 169.764 106.14C169.11 106.14 168.616 105.981 168.28 105.664C167.944 105.347 167.748 104.973 167.692 104.544L167.608 103.704C166.973 104.525 166.161 105.16 165.172 105.608C164.182 106.056 163.184 106.28 162.176 106.28C161.205 106.28 160.337 106.084 159.572 105.692C158.806 105.281 158.209 104.731 157.78 104.04C157.35 103.349 157.136 102.575 157.136 101.716ZM166.46 102.612C166.684 102.369 166.861 102.127 166.992 101.884C167.122 101.641 167.188 101.427 167.188 101.24V99.56C166.665 99.3547 166.114 99.2053 165.536 99.112C164.957 99 164.388 98.944 163.828 98.944C162.708 98.944 161.793 99.168 161.084 99.616C160.393 100.064 160.048 100.68 160.048 101.464C160.048 101.893 160.16 102.304 160.384 102.696C160.626 103.088 160.962 103.405 161.392 103.648C161.84 103.891 162.39 104.012 163.044 104.012C163.716 104.012 164.36 103.881 164.976 103.62C165.592 103.359 166.086 103.023 166.46 102.612ZM174.004 106V91.356H177.196L182.236 100.4L187.304 91.356H190.44V106H187.5V95.696L183.188 103.396H181.256L176.916 95.696V106H174.004ZM200.765 106.28C199.627 106.28 198.591 106.084 197.657 105.692C196.743 105.281 195.949 104.731 195.277 104.04C194.605 103.331 194.083 102.528 193.709 101.632C193.355 100.717 193.177 99.7467 193.177 98.72C193.177 97.3387 193.495 96.0787 194.129 94.94C194.764 93.7827 195.651 92.8587 196.789 92.168C197.928 91.4587 199.263 91.104 200.793 91.104C202.324 91.104 203.64 91.4587 204.741 92.168C205.861 92.8587 206.729 93.7733 207.345 94.912C207.961 96.0507 208.269 97.2733 208.269 98.58C208.269 98.804 208.26 99.0187 208.241 99.224C208.223 99.4107 208.204 99.5693 208.185 99.7H196.453C196.509 100.559 196.743 101.315 197.153 101.968C197.583 102.603 198.124 103.107 198.777 103.48C199.431 103.835 200.131 104.012 200.877 104.012C201.699 104.012 202.473 103.807 203.201 103.396C203.948 102.985 204.452 102.444 204.713 101.772L207.345 102.528C207.028 103.237 206.543 103.881 205.889 104.46C205.255 105.02 204.499 105.468 203.621 105.804C202.744 106.121 201.792 106.28 200.765 106.28ZM196.369 97.656H205.217C205.161 96.816 204.919 96.0787 204.489 95.444C204.079 94.7907 203.547 94.2867 202.893 93.932C202.259 93.5587 201.549 93.372 200.765 93.372C200 93.372 199.291 93.5587 198.637 93.932C198.003 94.2867 197.48 94.7907 197.069 95.444C196.659 96.0787 196.425 96.816 196.369 97.656ZM214.254 106V94.072H209.41V91.356H222.206V94.072H217.334V106H214.254ZM224.508 106V91.356H227.56V97.152H229.016L233.328 91.356H236.744L231.396 98.44L237.36 106H233.804L228.988 99.924H227.56V106H224.508ZM239.711 106V91.384H242.791V101.884L250.211 91.356H253.011V106H249.931V95.724L242.595 106H239.711Z"
          fill="white"
        />
      </Svg>
      <View style={stylesHeader.toggle}>
        <SwitchWithIcons 
        value={darkMode} 
        onValueChange={toggleSwitch}
        icon={ 
          {
          false: require('../img/Ellipse.png'), 
          true: require('../img/Vector.png')
        } 
        }
        trackColor={
          {true: "#362693", false: "#10637D"}
        }
        thumbColor={
          {true: "#AAFFFF", false: "#AAFFFF"}
        }
        />
      </View>
    </View>
  );
}

export default Header;
